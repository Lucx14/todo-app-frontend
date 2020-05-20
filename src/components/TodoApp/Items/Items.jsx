import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { sortById } from '../../../shared/utility';

const Wrapper = styled.div`
  padding: 20px;
`;

const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Lato', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #339af0;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const InputControls = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const CancelButton = styled.div`
  background: none;
  border: none;
  outline: none;
  padding: 15px;
  font-size: 1rem;
  cursor: pointer;
  color: #808080;
`;

const ItemWrapper = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
`;

const NewItemWrapper = styled.div`
  padding: 5px;
  display: flex;
  margin-top: 10px;
  align-items: center;
`;

const TextInput = styled.input`
  padding: 5px;
  width: 100%;
  margin-left: 10px;
  background: none;
  border: none;
  outline: none;
  border-bottom: 1px solid #a6a6a6;
  font-size: 1rem;
  color: #222222;
`;

const TrashButton = styled.button`
  background: none;
  border: none;
  outline: none;
  color: #808080;
  font-size: 0.8rem;
  margin-left: 0.5rem;
  cursor: pointer;
`;

const Label = styled.label`
  border-bottom: 1px solid #a6a6a6;
  width: 100%;
  margin-left: 10px;
  padding: 5px 0;
  color: #222222;
`;

const Input = styled.input`
  cursor: pointer;
`;

const AddItemButton = styled.button`
  padding: 2px 13px;
  background: none;
  border: none;
  outline: none;
  font-size: 1rem;
  border-radius: 5px;
  -moz-box-shadow: 1px 1px 5px 1px #ccc;
  -webkit-box-shadow: 1px 1px 5px 1px #ccc;
  box-shadow: 1px 1px 5px 1px #ccc;
  cursor: pointer;
  color: #808080;
`;

const Items = (props) => {
  const { items, todoTitle, clicked, toggleItemComplete, deleteItem } = props;
  const [formVisible, setFormVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [itemValue, setItemValue] = useState('');

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

  const itemList = sortById(items).map((item) => {
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
          <AddItemButton type="button" onClick={showForm}>
            <i className="fas fa-plus" />
          </AddItemButton>
        )}
        {formVisible && (
          <AddItemButton type="button" onClick={cancelFormSubmission}>
            <i className="fas fa-eject" />
          </AddItemButton>
        )}

        <AddItemButton type="button" onClick={toggleDelete}>
          {!deleteVisible && <i className="fas fa-times" />}
          {deleteVisible && <i className="fas fa-eject" />}
        </AddItemButton>
      </ControlsWrapper>

      <TopContent>
        <div>{todoTitle}</div>
        <div>{items.length}</div>
      </TopContent>

      <div>{itemList}</div>
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
              />
            </form>
            <CancelButton type="button" onClick={cancelFormSubmission}>
              <i className="far fa-times-circle" /> Cancel
            </CancelButton>
          </InputControls>
        </NewItemWrapper>
      )}
      {/* can also put an invisible button here later when you click form appears! */}
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
