import * as actionTypes from './actionTypes';

export const authInit = (email, password) => ({
  type: actionTypes.AUTH_INIT,
  email,
  password,
});

export const authStart = () => ({
  type: actionTypes.AUTH_START,
});

export const authSuccess = (token) => ({
  type: actionTypes.AUTH_SUCCESS,
  token,
});

export const authFail = (error) => ({
  type: actionTypes.AUTH_FAIL,
  error,
});

export const logOut = () => ({
  type: actionTypes.AUTH_INITIATE_LOGOUT,
});

export const logoutSuccess = () => ({
  type: actionTypes.AUTH_LOGOUT,
});

export const authCheckState = () => ({
  type: actionTypes.AUTH_CHECK_STATE,
});

export const checkAuthTimeout = (exp) => ({
  type: actionTypes.AUTH_CHECK_TIMEOUT,
  exp,
});

export const authSignup = (name, email, password, passwordConfirmation) => ({
  type: actionTypes.AUTH_SIGNUP,
  name,
  email,
  password,
  passwordConfirmation,
});

export const authSignupStart = () => ({
  type: actionTypes.AUTH_SIGNUP_START,
});

export const authSignupSuccess = (token) => ({
  type: actionTypes.AUTH_SIGNUP_SUCCESS,
  token,
});

export const authSignupFail = (error) => ({
  type: actionTypes.AUTH_SIGNUP_FAIL,
  error,
});
