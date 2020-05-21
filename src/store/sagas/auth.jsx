import { put, call } from 'redux-saga/effects';
import * as actions from '../actions/index';
import { signIn as apiSignIn } from '../../api/auth';

export function* signInSaga(action) {
  yield put(actions.authStart());

  try {
    const response = yield apiSignIn(action.email, action.password);
    yield localStorage.setItem('token', response.auth_token);
    yield put(actions.authSuccess(response.auth_token));
  } catch (err) {
    yield put(actions.authFail(err));
  }
}

export function* logoutSaga() {
  yield call([localStorage, 'removeItem'], 'token');
  yield put(actions.logoutSuccess());
}

export function* authCheckStateSaga() {
  const token = yield localStorage.getItem('token');

  if (!token) {
    yield put(actions.logOut());
  } else {
    yield put(actions.authSuccess(token));
  }
}
