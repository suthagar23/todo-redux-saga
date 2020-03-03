
import { List, Map } from 'immutable';
import {
  TODO_TITLE_REQUIRED,
  ADD_TODO,
  FETCH_TODO_FROM_API,
  FETCHED_TODO_FROM_API,
  SET_TOTAL_USERS,
  COUNT_TOTAL_USERS } from './constants';

const INITIAL_STATE = Map({
  todos: List(),
  addToDoError: false,
  isFetching: false,
  totalUsers: null,
  isCountingUsers: false,
});

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case TODO_TITLE_REQUIRED:
      return state.set('addToDoError', true)
    case ADD_TODO:
      return state
      .set('addToDoError', null)
      .updateIn(['todos'], arr => arr.push(action.payload))
    case FETCH_TODO_FROM_API:
      return state
      .set('isFetching', true)
      .set('addToDoError', null)
    case FETCHED_TODO_FROM_API:
      return state.set('isFetching', false)
    case SET_TOTAL_USERS:
        return state
        .set('totalUsers', action.payload.count)
        .set('isCountingUsers', false)
    case COUNT_TOTAL_USERS:
      return state.set('isCountingUsers', true)
    default:
        return state;
  }  
};