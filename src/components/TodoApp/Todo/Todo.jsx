import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.button`
  border: 1px solid black;
`;

const Todo = (props) => {
  const { title, id, count, clicked } = props;
  const [, setTodoTitle] = useState('');

  useEffect(() => {
    setTodoTitle(title);
  }, [title]);

  // const todoChangedHandler = (event) => {
  //   setTodoTitle(event.target.value);
  // };

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   submitted(todoTitle);
  // };

  return (
    <Wrapper onClick={clicked} value={id}>
      Icon {title} {count}
    </Wrapper>
  );
};

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  clicked: PropTypes.func.isRequired,
};

export default Todo;
