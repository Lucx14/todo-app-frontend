import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import NavigationItems from '../../../components/Navigation/NavigationItems/NavigationItems';

const Wrapper = styled.div`
  background-color: gray;
  opacity: 0.7;
  position: absolute;
  top: 0px;
  width: 100%;
  height: 5rem;
  display: flex;
`;

const Header = (props) => {
  const { isAuthenticated } = props;

  return (
    <Wrapper>
      <h1>Header component</h1>
      <NavigationItems isAuthenticated={isAuthenticated} />
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Header);
