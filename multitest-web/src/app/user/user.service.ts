import { Injectable } from "@angular/core";

import { Observable } from 'rxjs/Observable';

import { of } from 'rxjs/observable/of';

import {_throw} from 'rxjs/observable/throw';

import { NgRedux } from "@angular-redux/store";

import { IUser } from "./user.model";

import { IUserState } from "./user.store"

import { UserSessionActions } from "./user.session.action"

@Injectable()
export class UserService implements IUserService {

  constructor(private ngRedux: NgRedux<IUserState>, private actions: UserSessionActions) {
  }

  login(username: string, userpassword: string, useremail: string): Observable<IUser> {

    //TODO: May be link to some user service try/catch and return _throw("Invalid Error");
    //for error conditions

    const user: IUser = {
      id: 0,
      name: username,
      email: useremail
    }

    this.ngRedux.dispatch(this.actions.login(user));

    return of(user);
  }

  logoff() {
    this.ngRedux.dispatch(this.actions.logoff());
  }

  getCurrentUser(): IUser {
     return this.ngRedux.getState().user;
  }

}

export interface IUserService {
    login(username: string, userpassword: string, useremail: string): Observable<IUser>;
    logoff();
    getCurrentUser(): IUser;
}
