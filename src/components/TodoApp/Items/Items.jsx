import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { sortById } from '../../../shared/utility';
import ItemsActionButton from '../../UI/Button/ItemsActionButton';
import ActionButton from '../../UI/Button/ActionButton';
import {
  Wrapper,
  ItemsContentWrapper,
  ControlsWrapper,
  TopContent,
  InputControls,
  ItemWrapper,
  NewItemWrapper,
  TextInput,
  TrashButton,
  Label,
  Input,
  ToggleWrapper,
} from './style';

const Items = (props) => {
  const { items, todoTitle, clicked, toggleItemComplete, deleteItem } = props;
  const [formVisible, setFormVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [itemValue, setItemValue] = useState('');
  const [filter, setFilter] = useState(true);

  const itemUpdateValueHandler = (event) => {
    setItemValue(event.target.value);
  };

  const submitNewItem = (event) => {
    event.preventDefault();
    if (itemValue.length > 0) {
      clicked(itemValue);
    }
    setFormVisible(false);
    setItemValue('');
  };

  const toggleDelete = () => {
    setDeleteVisible((prevState) => !prevState);
  };

  const toggleFilter = () => {
    setFilter((prevState) => !prevState);
  };

  const cancelFormSubmission = (event) => {
    event.preventDefault();
    setFormVisible(false);
    setItemValue('');
  };

  const showForm = () => {
    setFormVisible(true);
  };

  const clickButton = (event) => {
    toggleItemComplete(parseInt(event.target.value, 10), event.target.checked);
  };

  const deleteClicked = (id, event) => {
    event.preventDefault();
    deleteItem(id);
  };

  const itemList = sortById(items)
    .filter((item) => (filter ? item.done !== true : item))
    .map((item) => {
      return (
        <ItemWrapper key={item.id}>
          <Input
            type="checkbox"
            id="toggleItem"
            onClick={clickButton}
            value={item.id}
            defaultChecked={item.done}
          />
          <Label htmlFor="toggleItem">{item.name}</Label>
          {deleteVisible && (
            <TrashButton
              type="button"
              onClick={(e) => deleteClicked(item.id, e)}
              value={item.id}
            >
              <i className="fas fa-trash-alt" />
            </TrashButton>
          )}
        </ItemWrapper>
      );
    });

  return (
    <Wrapper>
      <ControlsWrapper>
        {!formVisible && (
          <ItemsActionButton clicked={showForm}>
            <i className="fas fa-plus" />
          </ItemsActionButton>
        )}
        {formVisible && (
          <ItemsActionButton clicked={cancelFormSubmission}>
            <i className="fas fa-eject" />
          </ItemsActionButton>
        )}
        <ItemsActionButton clicked={toggleDelete}>
          {!deleteVisible && <i className="fas fa-times" />}
          {deleteVisible && <i className="fas fa-eject" />}
        </ItemsActionButton>
      </ControlsWrapper>

      <TopContent>
        <div>{todoTitle}</div>
        <div>{itemList.length}</div>
      </TopContent>

      <ItemsContentWrapper>{itemList}</ItemsContentWrapper>
      {formVisible && (
        <NewItemWrapper>
          <Input type="checkbox" disabled />
          <InputControls>
            <form onSubmit={submitNewItem}>
              <TextInput
                type="text"
                value={itemValue}
                onChange={itemUpdateValueHandler}
                name="new-item"
                placeholder="Add item...."
                autoFocus
                onBlur={cancelFormSubmission}
              />
            </form>
            <ActionButton clicked={cancelFormSubmission}>
              <i className="far fa-times-circle" /> Cancel
            </ActionButton>
          </InputControls>
        </NewItemWrapper>
      )}
      <ToggleWrapper>
        <ItemsActionButton clicked={toggleFilter}>
          {filter ? (
            <i className="far fa-eye" />
          ) : (
            <i className="far fa-eye-slash" />
          )}
        </ItemsActionButton>
      </ToggleWrapper>
    </Wrapper>
  );
};

Items.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
      todo_id: PropTypes.number.isRequired,
      created_at: PropTypes.string.isRequired,
      updated_at: PropTypes.string.isRequired,
    })
  ).isRequired,
  todoTitle: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired,
  toggleItemComplete: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default Items;
