import { AuthActionTypes } from './auth/actions';
import { ErrorActionTypes } from './error/actions';
import { SecretActionTypes } from './secret/actions';

export type StoreAction = AuthActionTypes | ErrorActionTypes | SecretActionTypes;
