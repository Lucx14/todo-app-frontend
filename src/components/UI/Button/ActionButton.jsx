import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: none;
  border: none;
  outline: none;
  padding: 15px;
  font-size: 1rem;
  cursor: pointer;
  color: #808080;
`;

const ActionButton = (props) => {
  const { children, clicked } = props;
  return (
    <StyledButton type="button" onClick={clicked}>
      {children}
    </StyledButton>
  );
};

ActionButton.propTypes = {
  children: PropTypes.node.isRequired,
  clicked: PropTypes.func.isRequired,
};

export default ActionButton;
