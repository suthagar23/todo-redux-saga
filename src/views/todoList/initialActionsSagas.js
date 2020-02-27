import { put, takeLatest } from 'redux-saga/effects';
import { COUNT_TOTAL_USERS, SET_TOTAL_USERS } from './constants';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* countTotalUsers() {
  const response = yield  fetch('https://reqres.in/api/users')
        .then(response => response.json())
  const count = response && response.data && response.data.length;
  yield delay(1000)
  yield put({ type: SET_TOTAL_USERS,  payload: { count }});
}

export default function* initialActionWatcher() {
  yield takeLatest(COUNT_TOTAL_USERS, countTotalUsers)
}