import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators} from "@angular/forms";
import { Router } from "@angular/router";

import { UserService } from "./user.service";


@Component({
  selector: "login",
  templateUrl: "./user.login.component.html"
})
export class UserLoginComponent {

  isError: boolean = false;

  errorMessage: string = "";

  loginForm = new FormGroup ({
    userName: new FormControl("",[Validators.required, Validators.minLength(3)])
  });

  constructor(private router: Router, private userService: UserService){
  }

  doLogin(){
    if(this.loginForm.valid){
      this.userService.login(this.loginForm.get("userName").value,"","");
      this.router.navigate(["/home"]);
    }
  }
}
