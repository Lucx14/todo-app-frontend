import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      error: null,
      loading: false,
    });
  });

  test('should store the token on login', () => {
    expect(
      reducer(
        {
          token: null,
          error: null,
          loading: false,
        },
        {
          type: actionTypes.AUTH_SUCCESS,
          token: 'test-token',
        }
      )
    ).toEqual({
      token: 'test-token',
      error: null,
      loading: false,
    });
  });
});
