import { StoreState } from '../../index';

export const selectHasError = (state: StoreState) => state.error.hasError;

export const selectError = (state: StoreState) => state.error.message;
