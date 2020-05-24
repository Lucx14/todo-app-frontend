import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import PropTypes from 'prop-types';

const Wrapper = styled.div`
  color: white;
  margin: 0;
  display: flex;
  height: 100%;
  align-items: center;
  width: auto;
  a {
    color: white;
    text-decoration: none;
    height: 100%;
    padding: 28px 25px;
    border-bottom: 4px solid transparent;
    :hover,
    :active {
      background-color: #808080;
      border-bottom: 4px solid #339af0;
      color: white;
    }
  }
`;

const NavigationItem = (props) => {
  const { link, exact, children } = props;
  return (
    <Wrapper>
      <NavLink
        to={link}
        exact={exact}
        activeStyle={{
          color: 'red',
          fontWeight: 'bold',
        }}
      >
        {children}
      </NavLink>
    </Wrapper>
  );
};

NavigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavigationItem;
