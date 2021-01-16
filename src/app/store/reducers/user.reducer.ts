import { LOGIN_Success } from './../actions/user.actions';
import { initialState } from './../index';
import { createReducer, on } from '@ngrx/store';

const _userReducer = createReducer(
  initialState,
  on(LOGIN_Success, (state, action: any) => {
    return {
      ...state,
      auth: action.user,
    };
  })
);
export function userReducer(state: any, action: any) {
  return _userReducer(state, action);
}
