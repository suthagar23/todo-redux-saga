import { put, takeLatest } from 'redux-saga/effects';
import { FETCHED_TODO_FROM_API, FETCH_TODO_FROM_API, ADD_TODO } from './constants';
import uuid from 'uuid';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* fetchTodoFromApi() {
  const response = yield  fetch('https://reqres.in/api/users/2')
        .then(response => response.json())
  const email = response && response.data && response.data.email;
  yield delay(1000)
  yield put({ type: ADD_TODO,  payload: { title: email, id: uuid.v4() }});
  yield put({ type: FETCHED_TODO_FROM_API,  payload: { title: email, id: uuid.v4() }});
}

export default function* todoActionWatcher() {
  yield takeLatest(FETCH_TODO_FROM_API, fetchTodoFromApi)
}