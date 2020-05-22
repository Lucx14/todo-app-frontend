import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => {
  const { isAuthenticated } = props;
  const location = useLocation();

  return (
    <ul>
      {isAuthenticated && (
        <NavigationItem link="/logout" exact={false}>
          Logout
        </NavigationItem>
      )}
      {!isAuthenticated && location.pathname === '/signup' && (
        <NavigationItem link="/auth" exact={false}>
          Sign in
        </NavigationItem>
      )}
      {!isAuthenticated && location.pathname === '/auth' && (
        <NavigationItem link="/signup" exact={false}>
          Sign up
        </NavigationItem>
      )}
    </ul>
  );
};

NavigationItems.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default NavigationItems;
