import { CLEAR_ERROR, SET_ERROR } from '../constants';

interface SetErrorAction {
  type: SET_ERROR
  message: string
}

interface ClearErrorAction {
  type: CLEAR_ERROR
}

export type ErrorActionTypes = SetErrorAction | ClearErrorAction;

export const setError = (message: string): SetErrorAction => ({
  message,
  type: SET_ERROR,
});

export const clearError = (): ClearErrorAction => ({
  type: CLEAR_ERROR,
});
