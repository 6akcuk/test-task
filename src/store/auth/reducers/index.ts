import { AuthActionTypes } from '../actions';
import { AuthState } from '../types';
import { CLEAR_USER_AUTH, SET_ME, SET_SIGNED_IN, SET_SIGNING_IN, SET_USER_AUTH } from '../constants';

const initialState: AuthState = {
  signingIn: false,
  signedIn: false,
};

export const auth = (state = initialState, action: AuthActionTypes): AuthState => {
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

    case SET_USER_AUTH:
      return {
        ...state,
        username: action.username,
        token: action.token,
      };

    case CLEAR_USER_AUTH:
      return {
        ...state,
        username: undefined,
        token: undefined,
      };

    case SET_ME:
      return {
        ...state,
        me: action.me,
      };

    default:
      return state;
  }
};
