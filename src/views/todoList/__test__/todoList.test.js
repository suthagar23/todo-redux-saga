import React from 'react'
import { shallow, mount } from 'enzyme';
import setupTests from "../../../__test__/setupTests";
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux';
import TodoRedux from '../index';
import { List, Map } from 'immutable';

setupTests();

const prepareWrapper = (state = {}, props = {}) => {
  const mockStore = configureStore();
  
  const initialState = Map({
    todos: List(),
    addToDoError: false,
    isFetching: false,
    totalUsers: null,
    isCountingUsers: false,
    ...state.todoList
  });      
  const store = mockStore({
    todoList: initialState
  })

  const wrapper = mount(<Provider store={store} {...props}> <TodoRedux /> </Provider>);
  return { store, initialState, wrapper };
}

describe('ToDo tests', () => {
  it('should render correctly', () => {
    const { wrapper } = prepareWrapper()
    expect(wrapper).toBeDefined();
  });

  it('Should not show Total Users with default props', () => {
    const { wrapper } = prepareWrapper()
    expect(wrapper).toBeDefined();

    expect(wrapper.contains(<b> Total Users : null </b>)).toBe(false)
    expect(wrapper.contains(<b> Total Users : Fetching... </b>)).toBe(false)
  });

  it('Should show Total Users are being fetched if isCountingUsers is True', () => {
    const { wrapper } = prepareWrapper({todoList: { isCountingUsers: true, totalUsers: 0 }})
    expect(wrapper).toBeDefined();
    expect(wrapper.contains(<b> Total Users : Fetching... </b>)).toBe(true)
    expect(wrapper.contains(<b> Total Users : 0 </b>)).toBe(false)
  });

  it('Should show Total Users amount if isCountingUsers is false and totalUsers has a value', () => {
    const { wrapper } = prepareWrapper({todoList: { isCountingUsers: false, totalUsers: 10 }})
    expect(wrapper).toBeDefined();
    expect(wrapper.contains(<b> Total Users : Fetching... </b>)).toBe(false)
    expect(wrapper.contains(<b> Total Users : 10 </b>)).toBe(true)
  });

  it('Test OnClick AddTodo without text should show Title required', () => {
    const { store, wrapper } = prepareWrapper({}, { addToDo: jest.fn()})
    expect(wrapper).toBeDefined();

    expect(wrapper.contains(<b> Please enter title </b>)).toBe(false)
   
    store.clearActions();
    wrapper.find(".addToDoButton").simulate("click");

    expect(store.getActions().length).toBe(1)
    const lastAction = store.getActions()[0]
    const expectedAction = { type: 'TODO_TITLE_REQUIRED', payload: { title: '' } }
    expect(lastAction.type).toBe(expectedAction.type)
    expect(lastAction.payload.title).toBe(expectedAction.payload.title)

  });

  it('Test OnClick AddTodo with text should not show Title required', () => {
    const { store, wrapper } = prepareWrapper({ todoList: { addToDoError: true }}, { addToDo: jest.fn()})
    expect(wrapper).toBeDefined();

    expect(wrapper.contains(<b> Please enter title </b>)).toBe(true)
   
    store.clearActions();
    expect(store.getActions().length).toBe(0)
    const input = wrapper.find('input')
    input.simulate('focus');
    input.simulate('change', { target: { value: 'Foo' } });
    wrapper.find(".addToDoButton").simulate("click");

    expect(store.getActions().length).toBe(1)
    const lastAction = store.getActions()[0]
    const expectedAction = { type: 'ADD_TO_DO', payload: { title: 'Foo', id: '1234' } }
    expect(lastAction.type).toBe(expectedAction.type)
    expect(lastAction.payload.title).toBe(expectedAction.payload.title)
  });

  it('Test OnClick AddTodo with text should add new ToDo to list', () => {
    const { store, wrapper } = prepareWrapper({}, { addToDo: jest.fn()})
    expect(wrapper).toBeDefined();

    expect(wrapper.contains(<b> Please enter title </b>)).toBe(false)
    expect(wrapper.contains(<li>Foo</li>)).toBe(false)

    store.clearActions();
    expect(store.getActions().length).toBe(0)
    const input = wrapper.find('input')
    input.simulate('focus');
    input.simulate('change', { target: { value: 'Foo' } });
    wrapper.find(".addToDoButton").simulate("click");

    expect(store.getActions().length).toBe(1)
    const lastAction = store.getActions()[0]
    const expectedAction = { type: 'ADD_TO_DO', payload: { title: 'Foo', id: '1234' } }
    expect(lastAction.type).toBe(expectedAction.type)
    expect(lastAction.payload.title).toBe(expectedAction.payload.title)
  });
});