import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import apiGetTodos from '../api/todos';

const Wrapper = styled.div`
  background-color: #e4d5bc;
  border: solid 1px black;
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const ListWrapper = styled.div`
  border: 1px solid red;
  padding: 20px;
`;

const ItemsWrapper = styled.div`
  border: 1px solid blue;
  padding: 20px;
`;

const TodoApp = () => {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    apiGetTodos().then((result) => {
      setTodos(result);
    });
  }, []);

  let list;
  if (todos) {
    list = todos.map((todo) => {
      return <p key={todo.id}>{todo.title}: 9</p>;
    });
  }

  return (
    <Wrapper>
      <ListWrapper>
        <h2>My lists</h2>
        {list}
        <p>+ todo</p>
      </ListWrapper>
      <ItemsWrapper>
        <h2>Items view</h2>
        <p>Stuff to do: 9</p>
        <p>78 completed: show/hide</p>
        <ul>
          <li>Book dentist</li>
          <li>Buy milk</li>
          <li>Book holidays</li>
        </ul>
      </ItemsWrapper>
    </Wrapper>
  );
};

export default TodoApp;
