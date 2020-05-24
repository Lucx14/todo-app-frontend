import React, { useEffect } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from './hoc/Layout/Header/Header';
import Footer from './hoc/Layout/Footer/Footer';
import TodoCont from './containers/TodoApp/TodoApp';
import Auth from './containers/Auth/Auth';
import Signup from './containers/Auth/Signup';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';
import { ContentWrapper, Wrapper } from './style';

const App = (props) => {
  const { onTryAutoSignup, isAuthenticated } = props;

  useEffect(() => {
    onTryAutoSignup();
  }, [onTryAutoSignup]);

  let routes = (
    <Switch>
      <Route path="/auth" component={Auth} />
      <Route path="/signup" component={Signup} />
      <Redirect to="/auth" />
    </Switch>
  );

  if (isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/logout" component={Logout} />
        <Route path="/" exact component={TodoCont} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Wrapper>
      <Header />
      <ContentWrapper>{routes}</ContentWrapper>
      <Footer />
    </Wrapper>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.token !== null,
});

const mapDispatchToProps = (dispatch) => ({
  onTryAutoSignup: () => dispatch(actions.authCheckState()),
});

App.propTypes = {
  onTryAutoSignup: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
