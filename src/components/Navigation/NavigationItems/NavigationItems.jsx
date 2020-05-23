import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useLocation } from 'react-router-dom';
import NavigationItem from './NavigationItem/NavigationItem';

const Wrapper = styled.div`
  height: 100%;
  margin: 0;
`;

const Icon = styled.i`
  padding-right: 10px;
`;

const NavigationItems = (props) => {
  const { isAuthenticated } = props;
  const location = useLocation();

  return (
    <Wrapper>
      {isAuthenticated && (
        <NavigationItem link="/logout" exact={false}>
          <Icon className="fas fa-sign-out-alt" />
          Logout
        </NavigationItem>
      )}
      {!isAuthenticated && location.pathname === '/signup' && (
        <NavigationItem link="/auth" exact={false}>
          <Icon className="fas fa-sign-in-alt" />
          Log in
        </NavigationItem>
      )}
      {!isAuthenticated && location.pathname === '/auth' && (
        <NavigationItem link="/signup" exact={false}>
          <Icon className="fas fa-user-plus" />
          Sign up
        </NavigationItem>
      )}
    </Wrapper>
  );
};

NavigationItems.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default NavigationItems;
