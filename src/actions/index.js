import { v4 } from 'node-uuid';

export const addTodo = name => ({
  type: 'ADD_TODO',
  id: v4(),
  name
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
});