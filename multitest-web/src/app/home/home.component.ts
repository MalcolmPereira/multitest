import { Component , OnInit} from '@angular/core';

import { Router } from '@angular/router';

import { IUserState, UserService } from '../user/index';

import { NgRedux } from '@angular-redux/store';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent{

  constructor(private ngRedux: NgRedux<IUserState>, private router: Router, private userService: UserService){
  }

  ngOnInit(): void {
    if(!this.userService.getCurrentUser()){
      this.router.navigate(['/login']);
    }
  }

  go(path){
    this.router.navigate([path]);
  }

}
