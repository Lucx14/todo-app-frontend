import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
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

const ItemsActionButton = (props) => {
  const { children, clicked } = props;
  return (
    <StyledButton type="button" onClick={clicked}>
      {children}
    </StyledButton>
  );
};

ItemsActionButton.propTypes = {
  children: PropTypes.node.isRequired,
  clicked: PropTypes.func.isRequired,
};

export default ItemsActionButton;
