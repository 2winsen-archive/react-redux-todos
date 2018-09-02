import React from 'react';

import Todo from './Todo';

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(t => (
      <Todo key={t.id} {...t} onClick={() => onTodoClick(t.id)} />
    ))}
  </ul>
);

export default TodoList;