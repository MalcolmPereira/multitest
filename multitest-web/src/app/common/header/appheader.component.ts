import { Component , OnInit } from "@angular/core";

import { Router } from "@angular/router";

import { UserService } from "../../user/index"

@Component({
  selector: "app-header",
  templateUrl: "appheader-component.html"
})
export class AppHeaderComponent implements OnInit {

  public readonly title:String = "MultiTest";

  constructor(private router: Router, private userService: UserService){
  }

  ngOnInit(): void {
    if(!this.userService.getCurrentUser()){
       this.router.navigate(["/login"]);
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
    this.router.navigate(["/login"]);
  }
}
