import { StoreState } from '../../index';

export const selectIsFetching = (state: StoreState) => state.secret.isFetching;

export const selectContent = (state: StoreState) => state.secret.content;
