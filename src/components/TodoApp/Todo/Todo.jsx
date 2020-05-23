import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ActionButton from '../../UI/Button/ActionButton';

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

const UpdateTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Input = styled.input`
  padding: 5px;
  margin-left: 5px;
  background: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: black solid 1px;
  outline: none;
  font-size: 1rem;
  color: #808080;
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
  const { title, id, count, clicked, updater } = props;
  const [todoTitle, setTodoTitle] = useState('');
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setTodoTitle(title);
  }, [title]);

  const contextMenu = (event) => {
    event.preventDefault();
    setEditMode(true);
  };

  const updateTitleHandler = (event) => {
    setTodoTitle(event.target.value);
  };

  const handleInputCancel = () => {
    setEditMode(false);
  };

  const cancelEdit = () => {
    setEditMode(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    updater(id, todoTitle);
    setEditMode(false);
  };

  return (
    <Wrapper>
      <Icon className="fas fa-list-ul fa-sm" />
      {!editMode && (
        <>
          <Title onClick={clicked} value={id} onDoubleClick={contextMenu}>
            {title}
          </Title>
          <Count>{count}</Count>
        </>
      )}
      {editMode && (
        <UpdateTitleWrapper>
          <form onSubmit={submitHandler}>
            <Input
              type="text"
              value={todoTitle}
              name="list-name"
              onChange={updateTitleHandler}
              placeholder="List Title..."
              autoFocus
              onBlur={handleInputCancel}
            />
          </form>
          <ActionButton clicked={cancelEdit}>
            <i className="far fa-times-circle" /> Cancel
          </ActionButton>
        </UpdateTitleWrapper>
      )}
    </Wrapper>
  );
};

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  clicked: PropTypes.func.isRequired,
  updater: PropTypes.func.isRequired,
};

export default Todo;
