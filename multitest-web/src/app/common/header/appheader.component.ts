import { Component, OnInit} from '@angular/core';

import { Router , NavigationStart} from '@angular/router';

import { NgRedux } from '@angular-redux/store';

import { IUserState, UserService } from '../../user/index'

@Component({
  selector: 'app-header',
  templateUrl: 'appheader-component.html'
})
export class AppHeaderComponent implements OnInit {

  constructor(private ngRedux: NgRedux<IUserState>, private router: Router, private userService: UserService){
  }

  ngOnInit(): void {
    console.log(this.ngRedux.getState());
    if(!this.userService.getCurrentUser()){
      this.router.navigate(['/login']);
    }
  }

  isLoggedOn(): Boolean {
    if(this.userService.getCurrentUser()){
      return true;
    }
    return false;
  }

  logoff(){
    this.userService.logoff();
    this.router.navigate(['/login']);
  }
}
