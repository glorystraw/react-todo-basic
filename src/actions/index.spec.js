import * as actions from './index';

describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    expect(actions.addTodo(0, 'Use Redux')).toEqual({
      type: 'ADD_TODO',
      id: 0,
      title: 'Use Redux'
    });
  });

  it('toggleTodo should create TOGGLE_TODO action', () => {
    expect(actions.toggleTodo(1)).toEqual({
      type: 'TOGGLE_TODO',
      id: 1
    });
  });

  it('deleteTodo should create DELETE_TODO action', () => {
    expect(actions.deleteTodo(1)).toEqual({
      type: 'DELETE_TODO',
      id: 1
    });
  });

  it('editTodo should create EDIT_TODO action', () => {
    expect(actions.editTodo(1, 'Bla bla bla')).toEqual({
      type: 'EDIT_TODO',
      id: 1,
      title: 'Bla bla bla'
    });
  });
});
