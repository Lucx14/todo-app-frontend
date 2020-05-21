import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavigationItem = (props) => {
  const { link, exact, children } = props;
  return (
    <li>
      <NavLink to={link} exact={exact}>
        {children}
      </NavLink>
    </li>
  );
};

NavigationItem.propTypes = {
  link: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
};

export default NavigationItem;
