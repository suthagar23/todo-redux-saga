import { all } from 'redux-saga/effects';
import todoActionWatcher from '../views/todoList/todoActionsSagas';
import initialActionWatcher from '../views/todoList/initialActionsSagas';

export default function* rootSaga() {
   yield all([
    initialActionWatcher(),
    todoActionWatcher(),
   ]);
}