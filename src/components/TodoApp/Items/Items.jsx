import React from 'react';
import PropTypes from 'prop-types';

const Items = (props) => {
  const { items, todoTitle, clicked } = props;

  const itemList = items.map((item) => {
    return <li key={item.id}>{item.name}</li>;
  });

  return (
    <div>
      <button type="button" onClick={clicked}>
        +
      </button>
      <h3>{todoTitle}</h3>
      <h3>{items.length}</h3>
      <div>{itemList}</div>
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
};

export default Items;