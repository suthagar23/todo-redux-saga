import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToDo, addToDoFromApi, countTotalUsers } from './actions';
import {
  getToDosState,
  getAddToDoErrorState,
  getSsFetchingState,
} from './selectors';
import {
  makeGetTotalUsersState,
  makeGetIsCountingUsersState
} from '../../selectors/usersSelectors';

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      apiError: false,
    };

    this.onClickAddToDo = this.onClickAddToDo.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickAddFromApi = this.onClickAddFromApi.bind(this);
  }

  componentDidMount() {
    const { countTotalUsers } = this.props;
    countTotalUsers();
  }

  onClickAddToDo() {
    const { addToDo } = this.props;
    const { title } = this.state;
    addToDo({ title });
  }

  onTitleChange(e) {
    this.setState({
      title: e.target.value,
    })
  }

  onClickAddFromApi() {
    const { addToDoFromApi } = this.props;
    addToDoFromApi();
  }

  render() {
    const { todos, addToDoError, isFetching, totalUsers, isCountingUsers } = this.props;
    const { apiError } = this.state;
    return (
      <div className="content">
        {totalUsers && (
          <b> Total Users : {isCountingUsers ? "Fetching..." : totalUsers} </b>
        )}
        <div className="row">
          <ul>
            {todos.map(todo => {
              return (<li key={todo.id}>{todo.title}</li>)
            })}
          </ul>
        </div>

        {apiError && ( <b> API Error Occurred </b>)}
        {addToDoError && (<b> Please enter title </b>)}
        {isFetching && (<b>Fetching...</b>)}
        <div className="addToDoBox">
          <input onChange={this.onTitleChange} type="text" />
          <button onClick={this.onClickAddToDo}>Add</button>
          <button onClick={this.onClickAddFromApi}>Add from API</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const toDoListState = state.todoList.toJS();

  const getTotalUsersState = makeGetTotalUsersState();
  const getIsCountingUsersState = makeGetIsCountingUsersState();

  return { 
    todos: getToDosState(toDoListState),
    addToDoError: getAddToDoErrorState(toDoListState),
    isFetching: getSsFetchingState(toDoListState),
    totalUsers: getTotalUsersState(toDoListState),
    isCountingUsers: getIsCountingUsersState(toDoListState),
  };
};

const mapDispatchToProps = { addToDo, addToDoFromApi, countTotalUsers };

export default connect(mapStateToProps,mapDispatchToProps)(Todo);;