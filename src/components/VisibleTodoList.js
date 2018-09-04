import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleTodo } from '../actions';
import TodoList from './TodoList';
import { getVisibleTodos } from '../reducers';

const mapStateToTodoListProps = (state, { match }) => ({
  todos: getVisibleTodos(state, match.params.filter || 'all')
});

export default withRouter(
  connect(
    mapStateToTodoListProps,
    { onTodoClick: toggleTodo }
  )(TodoList)
);