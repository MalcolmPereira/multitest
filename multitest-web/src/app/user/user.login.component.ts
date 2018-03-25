import { Component , Renderer2, OnInit,  AfterViewInit} from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from './user.service'


@Component({
  selector: 'login',
  templateUrl: './user.login.component.html',
  styleUrls: ['./user.login.component.css'],

})
export class UserLoginComponent implements  OnInit, AfterViewInit {

  loginForm: FormGroup;
  userName: FormControl;
  userPassword: FormControl;
  isError: boolean = false;
  errorMessage: string = undefined;

  constructor(private router: Router, private renderer:Renderer2, private userService: UserService){
  }

  ngOnInit(): void {
    this.isError = false;
    this.errorMessage = undefined;
    this.userName     = new FormControl("",Validators.required);
    this.loginForm = new FormGroup({
      userName: this.userName,
    });
  }

  ngAfterViewInit(): void {
  }

  login(formValues){
      if(this.userName.touched && this.userPassword.touched && this.loginForm.valid){
      }
  }

}
