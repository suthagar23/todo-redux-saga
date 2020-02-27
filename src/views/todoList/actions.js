import {
  TODO_TITLE_REQUIRED,
  ADD_TODO,
  FETCH_TODO_FROM_API,
  COUNT_TOTAL_USERS,
} from './constants';
import uuid from 'uuid';

export const addToDo = (payload) => {
  const { title } = payload;
  if (!title ) {
    return { type: TODO_TITLE_REQUIRED, payload };
  }

  return { type: ADD_TODO, payload: { title, id: uuid.v4() } };
}

export const addToDoFromApi = () => ({ type: FETCH_TODO_FROM_API })

export const countTotalUsers = () => ({ type: COUNT_TOTAL_USERS })
