import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ActionButton from '../../UI/Button/ActionButton';
import {
  Wrapper,
  Count,
  UpdateTitleWrapper,
  Input,
  Icon,
  Title,
} from './style';

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
