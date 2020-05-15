import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useTodosApi from '../../hooks/useTodoApi';
import Items from './Items/Items';
import { deleteTodo } from '../../api/todos';
import Todo from './Todo/Todo';

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

const TitlesWrapper = styled.div`
  border: 1px solid black;
`;

const TodoApp = () => {
  const [selectedTodo] = useState(0);
  const [todos, getTodos, addTodo, deleteTodo, loading, error] = useTodosApi();

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  const addTodoHandler = () => {
    addTodo();
  };

  const deleteTodoHandler = (event) => {
    console.log(event.target.value);
    deleteTodo(event.target.value);
  };

  const onTitleUpdate = (title) => {
    console.log('UPDATING THE TITLE!!!');
  };

  let list;
  if (!loading) {
    list = todos.map((todo) => {
      return (
        <>
          {/* <li
            onClick={deleteTodoHandler}
            key={todo.id}
            value={todo.id}
          > */}
          <Todo
            id={todo.id}
            title={todo.title}
            submitted={onTitleUpdate}
            count={todo.item_count || 0}
          />
          {/* </li> */}
        </>
      );
    });
  }

  let items;
  if (!loading) {
    items = todos[selectedTodo].items;
  }

  return (
    <Wrapper>
      <ListWrapper>
        <h2>My lists</h2>
        {/* <ul>{list}</ul> */}
        <TitlesWrapper>{list}</TitlesWrapper>
        <button type="button" onClick={addTodoHandler}>
          + todo
        </button>
      </ListWrapper>
      <ItemsWrapper>
        {!loading && (
          <Items items={items} todoTitle={todos[selectedTodo].title} />
        )}
      </ItemsWrapper>
    </Wrapper>
  );
};

export default TodoApp;
