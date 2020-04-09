import jwt from 'jsonwebtoken';

export interface FetchMeResponse {
  username: string
  role: string
  login: string
  avatar: string
}

export interface AuthPayload {
  username: string
  login: string
}

const SECRET = 'my-secret';

export class AuthService {
  static user = {
    username: 'John Doe',
    role: 'Admin',
    login: 'test@test.com',
    password: 'password',
    avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y',
  };

  static signIn(login: string, password: string): Promise<string> {
    return new Promise((resolve, reject) => {
      // emulate request time
      setTimeout(() => {
        if (login === AuthService.user.login && password === AuthService.user.password) {
          resolve(jwt.sign({
            username: AuthService.user.username,
            login: AuthService.user.login,
          } as AuthPayload, SECRET, { expiresIn: '1h' }));
        } else {
          reject('Wrong credentials');
        }
      }, 500);
    });
  }

  static fetchMe(token: string): Promise<FetchMeResponse> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (jwt.verify(token, SECRET)) {
          resolve({
            username: AuthService.user.username,
            avatar: AuthService.user.avatar,
            login: AuthService.user.login,
            role: AuthService.user.role,
          });
        } else {
          reject('Not authorized');
        }
      }, 500);
    });
  }
}
