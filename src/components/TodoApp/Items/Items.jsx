import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { sortById } from '../../../shared/utility';

const Items = (props) => {
  const { items, todoTitle, clicked, toggleItemComplete } = props;
  const [formVisible, setFormVisible] = useState(false);
  const [itemValue, setItemValue] = useState('');

  const itemUpdateValueHandler = (event) => {
    setItemValue(event.target.value);
  };

  const submitNewItem = (event) => {
    event.preventDefault();
    clicked(itemValue);
    setFormVisible(false);
    setItemValue('');
  };

  const showForm = () => {
    setFormVisible(true);
  };

  const clickButton = (event) => {
    toggleItemComplete(parseInt(event.target.value, 10), event.target.checked);
  };

  const itemList = sortById(items).map((item) => {
    return (
      <li key={item.id}>
        <input
          type="checkbox"
          id="toggleItem"
          onClick={clickButton}
          value={item.id}
          defaultChecked={item.done}
        />
        <label htmlFor="toggleItem">
          {item.name}: Done: {item.done ? 'true' : 'false'}
        </label>
      </li>
    );
  });

  return (
    <div>
      <button type="button" onClick={showForm}>
        +
      </button>
      <h3>{todoTitle}</h3>
      <h3>{items.length}</h3>
      <div>{itemList}</div>
      {formVisible && (
        <form onSubmit={submitNewItem}>
          <input
            type="text"
            value={itemValue}
            onChange={itemUpdateValueHandler}
            name="new-item"
            placeholder="Add item...."
          />
        </form>
      )}
      {/* can also put an invisible button here later when you click form appears! */}
    </div>
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
};

export default Items;
