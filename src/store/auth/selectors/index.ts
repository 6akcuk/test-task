import { StoreState } from '../../index';

export const selectSigningIn = (state: StoreState) => state.auth.signingIn;

export const selectSignedIn = (state: StoreState) => state.auth.signedIn;

export const selectUsername = (state: StoreState) => state.auth.username;

export const selectRole = (state: StoreState) => state.auth.me?.role;

export const selectAvatar = (state: StoreState) => state.auth.me?.avatar;
