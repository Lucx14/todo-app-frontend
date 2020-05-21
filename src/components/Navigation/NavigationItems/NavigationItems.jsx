import React from 'react';
import PropTypes from 'prop-types';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => {
  const { isAuthenticated } = props;
  return (
    <ul>
      {isAuthenticated && (
        <NavigationItem link="/logout" exact={false}>
          Logout
        </NavigationItem>
      )}
      {!isAuthenticated && (
        <NavigationItem link="/auth" exact={false}>
          Authenticate
        </NavigationItem>
      )}
    </ul>
  );
};

NavigationItems.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default NavigationItems;
