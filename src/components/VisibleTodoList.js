import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleTodo } from '../actions';
import TodoList from './TodoList';
import { getVisibleTodos } from '../reducers';
import { fetchTodos } from '../api';

class VisibleTodoList extends Component {
  componentDidMount() {
    fetchTodos(this.props.filter).then(todos => {
      console.log(todos);
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.filter !== this.props.filter) {
      fetchTodos(this.props.filter).then(todos => {
        console.log(todos);
      });
    }
  }

  render() {
    return <TodoList {...this.props} />
  }
}

const mapStateToTodoListProps = (state, { match }) => {
  const filter = match.params.filter || 'all';
  return {
    todos: getVisibleTodos(state, filter),
    filter
  }
};

export default withRouter(
  connect(
    mapStateToTodoListProps,
    { onTodoClick: toggleTodo }
  )(VisibleTodoList)
);