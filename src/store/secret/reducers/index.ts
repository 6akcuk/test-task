import { SecretState } from '../types';
import { SecretActionTypes } from '../actions';
import { SET_CONTENT, SET_IS_FETCHING } from '../constants';

const initialState: SecretState = {
  isFetching: false,
};

export const secret = (state = initialState, action: SecretActionTypes): SecretState => {
  switch (action.type) {
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case SET_CONTENT:
      return {
        ...state,
        content: action.content,
      };

    default:
      return state;
  }
};
