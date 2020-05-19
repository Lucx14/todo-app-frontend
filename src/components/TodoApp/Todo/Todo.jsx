import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.button`
  border: 1px solid black;
`;

const Todo = (props) => {
  const { title, id, count, clicked, deleteTodo } = props;
  const [, setTodoTitle] = useState('');

  useEffect(() => {
    setTodoTitle(title);
  }, [title]);

  const deleteClicked = () => {
    deleteTodo(id);
  };

  return (
    <>
      <Wrapper onClick={clicked} value={id}>
        Icon {title} {count}
      </Wrapper>
      <button type="button" onClick={deleteClicked}>
        x
      </button>
    </>
  );
};

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  clicked: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default Todo;
