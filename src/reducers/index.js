
import { combineReducers } from 'redux';
import todoListReducer from '../views/todoList/reducer';

const rootReducer = combineReducers({
  todoList: todoListReducer,
});
export default rootReducer;