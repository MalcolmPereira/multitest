import { Action } from 'redux';
import { UserAction, UserSessionActions } from './user.session.action';
import { IUser } from './user.model';

export interface IUserState {
  user: IUser;
}

export const INITIAL_STATE: IUserState = {
  user: undefined,
};

export function UserSessionReducer(userInfo: IUserState, action: UserAction): IUserState {
  switch(action.type) {
      case UserSessionActions.LOGIN: return {
          user: action.payload
      };
      case UserSessionActions.LOGOFF: return INITIAL_STATE;
  }
  return INITIAL_STATE;
}
