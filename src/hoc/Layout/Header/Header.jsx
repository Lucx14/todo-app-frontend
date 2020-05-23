import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import NavigationItems from '../../../components/Navigation/NavigationItems/NavigationItems';

const Wrapper = styled.div`
  background-color: black;
  opacity: 0.7;
  position: absolute;
  top: 0px;
  width: 100%;
  color: white;
`;

const Icon = styled.i`
  padding-right: 15px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 0 auto;
  align-items: center;
`;

const Header = (props) => {
  const { isAuthenticated } = props;

  return (
    <Wrapper>
      <Content>
        <h1>
          <Icon className="fas fa-list-ul" />
          Todo List App
        </h1>
        <NavigationItems isAuthenticated={isAuthenticated} />
      </Content>
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
