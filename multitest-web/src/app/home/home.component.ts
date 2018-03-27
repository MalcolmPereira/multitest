import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { UserService } from '../user/index';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  constructor(private router: Router, private userService: UserService){
  }

}
