import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #e4d5bc;
  border: solid 1px black;
  display: flex;
  justify-content: center;
`;

const ListWrapper = styled.div`
  border: 1px solid red;
`;

const ItemsWrapper = styled.div`
  border: 1px solid blue;
`;

const initialState = {
  todos: {
    collection: [
      {
        id: 1,
        title: 'Stuff to do',
        created_by: '1',
        created_at: '2020-05-12T10:02:11.964Z',
        updated_at: '2020-05-12T10:02:11.964Z',
      },
      {
        id: 2,
        title: 'Today',
        created_by: '1',
        created_at: '2020-05-12T10:02:11.964Z',
        updated_at: '2020-05-12T10:02:11.964Z',
      },
      {
        id: 3,
        title: 'Shopping list',
        created_by: '1',
        created_at: '2020-05-12T10:02:11.964Z',
        updated_at: '2020-05-12T10:02:11.964Z',
      },
    ],
  },
};

const TodoApp = () => {
  const [todos] = useState(initialState);

  // console.log(todos.todos.collection);
  const list = todos.todos.collection.map((todo) => {
    return <p key={todo.id}>{todo.title}: 9</p>;
  });

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
