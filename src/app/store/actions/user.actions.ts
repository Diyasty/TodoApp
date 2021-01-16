import { User } from './../../core/models/user.model';
import { createAction, props } from '@ngrx/store';
export enum actions {
  'LOGIN_User' = '[Users Login] Start',
  'LOGIN_Success' = '[Users Login] success',
}

export const loginAction = createAction(actions.LOGIN_User, props<User>());
export const LOGIN_Success = createAction(actions.LOGIN_Success, props<User>());
