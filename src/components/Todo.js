import React from 'react';

const Todo = ({ onClick, completed, name }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {name}
  </li>
);

export default Todo;