import { Component , OnInit} from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from './user.service'


@Component({
  selector: 'login',
  templateUrl: './user.login.component.html',
  styleUrls: ['./user.login.component.css'],

})
export class UserLoginComponent implements  OnInit {

  loginForm: FormGroup;
  userName: FormControl;
  userPassword: FormControl;
  isError: boolean = false;
  errorMessage: string = undefined;

  constructor(private router: Router, private userService: UserService){
  }

  ngOnInit(): void {
    this.isError = false;
    this.errorMessage = undefined;
    this.userName     = new FormControl("",Validators.required);
    this.loginForm = new FormGroup({
      userName: this.userName,
    });
  }

  doLogin(formValues){
    if(this.userName.touched && this.loginForm.valid){
      this.userService.login(this.userName.value,"","");
      this.router.navigate(['/home']);
    }
  }
}
