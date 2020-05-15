import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TodoApp from '../../components/TodoApp/TodoApp';
import * as actions from '../../store/actions/index';
import Header from '../../components/Layout/Header/Header';

const Todos = (props) => {
  const { onfetchTodos, loading } = props;

  useEffect(() => {
    onfetchTodos();
  }, [onfetchTodos]);

  const todos = <p>SPINNER</p>;

  return <div>{todos}</div>;
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
  onfetchTodos: () => dispatch(actions.fetchTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
