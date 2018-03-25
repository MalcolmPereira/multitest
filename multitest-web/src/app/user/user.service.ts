import { Injectable } from '@angular/core';

import { NgRedux } from '@angular-redux/store';

import { IUser } from './user.model';

import { IUserState } from './user.store'

import { UserSessionActions } from './user.session.action'

@Injectable()
export class UserService implements IUserService {

  constructor(private ngRedux: NgRedux<IUserState>, private actions: UserSessionActions) {
  }

  login(username: string, userpassword: string, useremail: string): IUser {
    const user: IUser = {
      id: 0,
      name: username,
      email: useremail
    }
    this.ngRedux.dispatch(this.actions.login(user));
    return user;
  }

  logoff() {
    this.ngRedux.dispatch(this.actions.logoff());
  }

  getCurrentUser(): IUser {
     //console.log("Now Checking ",this.ngRedux.getState());
     return this.ngRedux.getState().user;
  }

}

export interface IUserService {
    login(username: string, userpassword: string, useremail: string): IUser;
    logoff();
    getCurrentUser(): IUser;
}
