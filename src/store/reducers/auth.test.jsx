import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
  test('should return the initial state when no action is passed', () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      error: null,
      loading: false,
    });
  });

  test('should set loading true on AUTH_START', () => {
    expect(reducer(undefined, { type: actionTypes.AUTH_START })).toEqual({
      token: null,
      error: null,
      loading: true,
    });
  });

  test('should store the token on AUTH_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: actionTypes.AUTH_SUCCESS,
        token: 'test-token',
      })
    ).toEqual({
      token: 'test-token',
      error: null,
      loading: false,
    });
  });

  test('should set error on AUTH_FAIL', () => {
    expect(
      reducer(undefined, { type: actionTypes.AUTH_FAIL, error: 'Test-error' })
    ).toEqual({
      token: null,
      error: 'Test-error',
      loading: false,
    });
  });

  test('should set token to null on logout', () => {
    expect(reducer(undefined, { type: actionTypes.AUTH_LOGOUT })).toEqual({
      token: null,
      error: null,
      loading: false,
    });
  });
});
