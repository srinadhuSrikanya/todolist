import * as todo from '../app.js/TODOLIST';

describe('Todo class tests', () => {
  test('check todo properties', () => {
    const myTodo = new todo.Todo('my todo', 'this is my job', '10:30', '12/27/2020', 1);
    expect(myTodo.title).toEqual('my todo');
    expect(myTodo.job).toEqual('this is my job');
    expect(myTodo.duetime).toEqual('10:30');
    expect(myTodo.dueDate).toEqual('12/27/2020');
  });
});