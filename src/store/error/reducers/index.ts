import { ErrorState } from '../types';
import { ErrorActionTypes } from '../actions';
import { CLEAR_ERROR, SET_ERROR } from '../constants';

const initialState: ErrorState = {
  hasError: false,
};

export const error = (state = initialState, action: ErrorActionTypes): ErrorState => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        message: action.message,
        hasError: true,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        message: undefined,
        hasError: false,
      };

    default:
      return state;
  }
};
