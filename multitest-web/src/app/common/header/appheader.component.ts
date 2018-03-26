import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { UserService } from '../../user/index'

@Component({
  selector: 'app-header',
  templateUrl: 'appheader-component.html'
})
export class AppHeaderComponent  {

  constructor(private router: Router, private userService: UserService){
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
