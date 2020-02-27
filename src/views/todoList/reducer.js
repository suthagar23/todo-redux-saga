import {
  TODO_TITLE_REQUIRED,
  ADD_TODO,
  FETCH_TODO_FROM_API,
  FETCHED_TODO_FROM_API,
  SET_TOTAL_USERS,
  COUNT_TOTAL_USERS } from './constants';

const INITIAL_STATE = {
  todos: [],
  addToDoError: false,
  isFetching: false,
  totalUsers: 1,
  isCountingUsers: false,
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case TODO_TITLE_REQUIRED:
        return {
          ...state,
          addToDoError: true,
        };
    case ADD_TODO:
        return {
          ...state,
          addToDoError: null,
          todos: [
            ...state.todos,
            action.payload,
          ]
        };
    case FETCH_TODO_FROM_API:
      return {
        ...state,
        isFetching: true
      }
    case FETCHED_TODO_FROM_API:
      return {
        ...state,
        isFetching: false
      }
    case SET_TOTAL_USERS:
      return {
        ...state,
        totalUsers: action.payload.count,
        isCountingUsers: false,
      }
    case COUNT_TOTAL_USERS:
      return {
        ...state,
        isCountingUsers: true,
      }
    default:
        return state;
  }  
};