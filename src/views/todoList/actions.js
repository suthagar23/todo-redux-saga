import { TODO_TITLE_REQUIRED, ADD_TODO, FETCH_TODO_FROM_API } from './constants';
import uuid from 'uuid';

export function addToDo(payload) {
  const { title } = payload;
  if (!title ) {
    return { type: TODO_TITLE_REQUIRED, payload };
  }

  return { type: ADD_TODO, payload: { title, id: uuid.v4() } };
}

export const addToDoFromApi = () => ({ type: FETCH_TODO_FROM_API })