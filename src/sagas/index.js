import { all } from 'redux-saga/effects';
import todoActionWatcher from '../views/todoList/sagas';

export default function* rootSaga() {
   yield all([
    todoActionWatcher(),
   ]);
}