import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { SET_SIGNED_IN, SET_SIGNING_IN } from '../constants';
import { AuthState } from '../types';

export interface SetSigningInAction {
  type: SET_SIGNING_IN
  signingIn: boolean
}

export interface SetSignedInAction {
  type: SET_SIGNED_IN
  signedIn: boolean
}

export type AuthActionTypes = SetSigningInAction | SetSignedInAction;

export const signIn = (login: string, password: string): ThunkAction<void, AuthState, unknown, Action<string>> => dispatch => {
  dispatch(setSigningIn(true));


};

const setSigningIn = (signingIn: boolean): SetSigningInAction => ({
  signingIn,
  type: SET_SIGNING_IN,
});

const setSignedIn = (signedIn: boolean):SetSignedInAction => ({
  signedIn,
  type: SET_SIGNED_IN,
});
