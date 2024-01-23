import { createReducer, on } from '@ngrx/store';
import { checkAuthAction } from '../actions/auth.action';

interface IUser{
  token: string;
  username: string;
  userId: number;
}
const initialState = {
  token: '',
  username: '',
  userId: 0
}
export const authReduser = createReducer(
  initialState,
  on(checkAuthAction, (state, action): IUser  => {
    return {...state, ...action}
  })
);
