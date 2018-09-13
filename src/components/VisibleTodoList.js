import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';
import TodoList from './TodoList';
import { getVisibleTodos, getIsFetching } from '../reducers';

class VisibleTodoList extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.filter !== this.props.filter) {
      this.fetchData();
    }
  }

  fetchData = () => {
    const { filter, fetchTodos, requestTodos } = this.props;
    requestTodos(filter)
    fetchTodos(filter);
  }

  render() {
    const { toggleTodo, todos, isFetching } = this.props;
    if (isFetching && !todos.length) {
      return <p>Loading...</p>;
    }
    return (
      <TodoList
        todos={todos}
        onTodoClick={toggleTodo} />
    );
  }
}

const mapStateToTodoListProps = (state, { match }) => {
  const filter = match.params.filter || 'all';
  return {
    todos: getVisibleTodos(state, filter),
    filter,
    isFetching: getIsFetching(state, filter)
  }
};

export default withRouter(
  connect(
    mapStateToTodoListProps,
    actions,
  )(VisibleTodoList)
);