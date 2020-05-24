import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NavigationItems from '../../../components/Navigation/NavigationItems/NavigationItems';
import { Wrapper, Icon, Content } from './style';

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
