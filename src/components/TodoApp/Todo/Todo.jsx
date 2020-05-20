import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

const Count = styled.div`
  position: absolute;
  right: 0;
  padding: 16px 0;
  font-weight: bold;
  color: #222222;
`;

const Icon = styled.div`
  padding: 10px;
  margin: 10px;
  background-color: #339af0;
  border-radius: 50%;
  color: white;
`;

const Title = styled.div`
  width: 100%;
  padding: 15px 5px;
  color: #222222;
`;

const Todo = (props) => {
  const { title, id, count, clicked } = props;
  const [, setTodoTitle] = useState('');

  useEffect(() => {
    setTodoTitle(title);
  }, [title]);

  return (
    <Wrapper>
      <Icon className="fas fa-list-ul fa-sm" />
      <Title onClick={clicked} value={id}>
        {title}
      </Title>
      <Count>{count}</Count>
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
