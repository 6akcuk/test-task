import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { SET_CONTENT, SET_IS_FETCHING } from '../constants';
import { SecretState } from '../types';
import { SecretService } from '../../../services/secret.service';
import { setError } from '../../error/actions';

export interface SetIsFetchingAction {
  type: SET_IS_FETCHING
  isFetching: boolean
}

export interface SetContentAction {
  type: SET_CONTENT
  content: string
}

export type SecretActionTypes = SetIsFetchingAction | SetContentAction;

export const fetchContent = (content: string): ThunkAction<void, SecretState, unknown, Action<string>> => dispatch => {
  dispatch(setIsFetching(true));

  return SecretService.fetch(content)
    .then((result) => {
      dispatch(setIsFetching(false));
      dispatch(setContent(result));
    })
    .catch((error) => {
      dispatch(setIsFetching(false));
      dispatch(setError(error));
    });
};

const setIsFetching = (isFetching: boolean): SetIsFetchingAction => ({
  isFetching,
  type: SET_IS_FETCHING,
});

const setContent = (content: string): SetContentAction => ({
  content,
  type: SET_CONTENT,
});
