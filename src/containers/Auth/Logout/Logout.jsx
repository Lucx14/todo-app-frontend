import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../../store/actions/index';

const Logout = (props) => {
  const { onLogout } = props;

  useEffect(() => {
    onLogout();
  }, [onLogout]);

  return <Redirect to="/auth" />;
};

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(actions.logOut()),
});

Logout.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Logout);
