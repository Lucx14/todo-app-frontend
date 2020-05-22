import { put, call, delay } from 'redux-saga/effects';
import * as actions from '../actions/index';
import { signIn as apiSignIn } from '../../api/auth';

export function* signInSaga(action) {
  yield put(actions.authStart());

  try {
    const response = yield apiSignIn(action.email, action.password);
    const tokenExpirationDate = yield new Date(response.token_exp * 1000);
    yield localStorage.setItem('token', response.auth_token);
    yield localStorage.setItem('tokenExpirationDate', tokenExpirationDate);
    yield localStorage.setItem('userId', response.user_id);
    yield put(actions.authSuccess(response.auth_token));
    yield put(actions.checkAuthTimeout(response.token_exp));
  } catch (err) {
    yield put(actions.authFail(err));
  }
}

export function* logoutSaga() {
  yield call([localStorage, 'removeItem'], 'token');
  yield call([localStorage, 'removeItem'], 'tokenExpirationDate');
  yield call([localStorage, 'removeItem'], 'userId');
  yield put(actions.logoutSuccess());
}

export function* authCheckStateSaga() {
  const token = yield localStorage.getItem('token');

  if (!token) {
    yield put(actions.logOut());
  } else {
    const expirationDate = yield new Date(
      localStorage.getItem('tokenExpirationDate')
    );
    if (expirationDate <= new Date()) {
      yield put(actions.logOut());
    } else {
      yield put(actions.authSuccess(token));
      yield put(
        actions.checkAuthTimeout(
          (expirationDate.getTime() - new Date().getTime()) / 1000
        )
      );
    }
  }
}

export function* checkAuthTimeoutSaga(action) {
  yield delay(action.exp * 1000);
  yield put(actions.logOut());
}
