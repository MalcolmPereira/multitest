import { Component, OnInit} from '@angular/core';

import { UserService } from '../../user/user.service'



@Component({
  selector: 'app-header',
  templateUrl: 'appheader-component.html'
})
export class AppHeaderComponent implements OnInit {

  constructor(private userService: UserService){
  }

  ngOnInit(): void {
    console.log(this.isLoggedOn());
  }

  isLoggedOn(): Boolean {
    if(this.userService.getCurrentUser()){
      return true;
    }
    return false;
  }

  getWelcomeMessage(): string{
    return "Welcolm " + this.userService.getCurrentUser().name;
  }

  login(){
    this.userService.login('malcolm','malcolm','malcolm');
  }

  logoff(){
    this.userService.logoff();
  }

}
