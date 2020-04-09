import { AuthActionTypes } from '../actions';
import { AuthState } from '../types';
import { SET_SIGNED_IN, SET_SIGNING_IN } from '../constants';

const initialState: AuthState = {
  signingIn: false,
  signedIn: false,
};

export const auth = (state: AuthState = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case SET_SIGNING_IN:
      return {
        ...state,
        signingIn: action.signingIn,
      };

    case SET_SIGNED_IN:
      return {
        ...state,
        signedIn: action.signedIn,
      };

    default:
      return state;
  }
};
