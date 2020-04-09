import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import jwt from 'jsonwebtoken';

import { CLEAR_USER_AUTH, SET_ME, SET_SIGNED_IN, SET_SIGNING_IN, SET_USER_AUTH } from '../constants';
import { AuthState } from '../types';
import { AuthPayload, AuthService, FetchMeResponse } from '../../../services/auth.service';
import { setError } from '../../error/actions';

export interface SetSigningInAction {
  type: SET_SIGNING_IN
  signingIn: boolean
}

export interface SetSignedInAction {
  type: SET_SIGNED_IN
  signedIn: boolean
}

export interface SetUserAuthAction {
  type: SET_USER_AUTH
  token: string
  username: string
}

export interface ClearUserAuthAction {
  type: CLEAR_USER_AUTH
}

export interface SetMeAction {
  type: SET_ME
  me: FetchMeResponse
}

export type AuthActionTypes = SetSigningInAction | SetSignedInAction | SetUserAuthAction | ClearUserAuthAction | SetMeAction;

export const signIn = (login: string, password: string): ThunkAction<void, AuthState, unknown, Action<string>> => dispatch => {
  dispatch(setSigningIn(true));

  return AuthService.signIn(login, password)
    .then((token) => {
      const data = jwt.decode(token) as AuthPayload | null;

      if (data) {
        dispatch(setUserAuth(token, data.username));

        return dispatch(fetchMe(token));
      } else {
        dispatch(setSigningIn(false));
        dispatch(setSignedIn(false));
        dispatch(clearUserAuth());

        throw new Error('Invalid token');
      }
    })
    .catch((error) => {
      dispatch(setSigningIn(false));
      dispatch(setSignedIn(false));
      dispatch(clearUserAuth());

      dispatch(setError(error));
    });
};

const fetchMe = (token: string): ThunkAction<void, AuthState, unknown, Action<string>> => dispatch => {
  return AuthService.fetchMe(token)
    .then((user) => {
      dispatch(setSigningIn(false));
      dispatch(setSignedIn(true));
      dispatch(setMe(user));
    });
};

const setSigningIn = (signingIn: boolean): SetSigningInAction => ({
  signingIn,
  type: SET_SIGNING_IN,
});

const setSignedIn = (signedIn: boolean): SetSignedInAction => ({
  signedIn,
  type: SET_SIGNED_IN,
});

const setUserAuth = (token: string, username: string): SetUserAuthAction => ({
  username,
  token,
  type: SET_USER_AUTH,
});

const clearUserAuth = (): ClearUserAuthAction => ({
  type: CLEAR_USER_AUTH,
});

const setMe = (me: FetchMeResponse): SetMeAction => ({
  me,
  type: SET_ME,
});
