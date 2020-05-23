import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: solid balck 1px;
  background: none;
  border: none;
  outline: none;
  padding: 15px;
  font-size: 1rem;
  cursor: pointer;
  color: #808080;
`;

const Button = (props) => {
  const { children } = props;
  return <StyledButton type="submit">{children}</StyledButton>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
