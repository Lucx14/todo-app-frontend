import * as actionTypes from '../actions/actionTypes';
import updateObject from '../../shared/utility';

const initialState = {
  token: null,
  error: null,
  loading: false,
};

const authStart = (state) => {
  return updateObject(state, { error: null, loading: true });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.token,
    error: null,
    loading: false,
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const authLogout = (state) => {
  return updateObject(state, { token: null });
};

const authSignupStart = (state) => {
  return updateObject(state, { error: null, loading: true });
};

const authSignupSuccess = (state, action) => {
  return updateObject(state, {
    token: action.token,
    error: null,
    loading: false,
  });
};

const authSignupFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    case actionTypes.AUTH_SIGNUP_START:
      return authSignupStart(state, action);
    case actionTypes.AUTH_SIGNUP_SUCCESS:
      return authSignupSuccess(state, action);
    case actionTypes.AUTH_SIGNUP_FAIL:
      return authSignupFail(state, action);
    default:
      return state;
  }
};

export default reducer;
