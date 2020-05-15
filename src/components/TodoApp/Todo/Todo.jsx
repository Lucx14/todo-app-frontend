import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid black;
`;

const Todo = (props) => {
  const { title, id, submitted, count } = props;
  const [todoTitle, setTodoTitle] = useState('');

  useEffect(() => {
    setTodoTitle(title);
  }, [title]);

  const todoChangedHandler = (event) => {
    setTodoTitle(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    submitted(todoTitle);
  };

  return (
    <Wrapper>
      <div>Icon</div>
      <form onSubmit={submitHandler}>
        <input
          id={id}
          value={todoTitle}
          type="text"
          name="todo-title"
          onChange={todoChangedHandler}
        />
      </form>
      <div>{count}</div>
    </Wrapper>
  );
};

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  submitted: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

export default Todo;
