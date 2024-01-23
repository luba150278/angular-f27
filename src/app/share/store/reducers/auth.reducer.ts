import { createReducer, on } from '@ngrx/store';
import { checkAuthAction, loginAction, logoutAction } from '../actions/auth.action';

interface IUser {
  isAuth: boolean;
  token: string;
  username: string;
  id: number;
}
const initialState = {
  isAuth: false,
  token: '',
  username: '',
  id: 0,
};
export const authReduser = createReducer(
  initialState,
  on(checkAuthAction, (state, action): IUser => {
    return { ...state, ...action };
  }),
  on(loginAction, (state, action): IUser => {
    localStorage.setItem('token', action.token);
    localStorage.setItem('username', action.username);
    localStorage.setItem('id', action.id + '');
    const isAuth = !!action.token;
    return { ...state, ...action, isAuth };
  }),
  on(logoutAction, () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('id');
    return initialState;
  })
);
