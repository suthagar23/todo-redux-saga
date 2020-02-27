import { TODO_TITLE_REQUIRED, ADD_TODO, FETCH_TODO_FROM_API, FETCHED_TODO_FROM_API } from './constants';

const INITIAL_STATE = {
  todos: [],
  addToDoError: false,
  isFetching: false,
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
    default:
        return state;
  }  
};