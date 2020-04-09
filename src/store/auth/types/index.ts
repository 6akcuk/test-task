import { FetchMeResponse } from '../../../services/auth.service';

export interface AuthState {
  signingIn: boolean
  signedIn: boolean
  token?: string
  username?: string
  me?: FetchMeResponse
}
