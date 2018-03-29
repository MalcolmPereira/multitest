import { Injectable } from "@angular/core";
import { Action } from "redux";
import { IUser } from "./user.model"

export class UserAction implements Action {
    type: string;
    payload: IUser;
}

@Injectable()
export class UserSessionActions {

  static LOGIN: string = "LOGIN";

  static LOGOFF: string= "LOGOFF";

  login(user: IUser): UserAction {
    return {
        type: UserSessionActions.LOGIN,
        payload: user
    };
  }

  logoff(): UserAction {
    return {
        type: UserSessionActions.LOGOFF,
        payload: undefined
    };
  }
}
