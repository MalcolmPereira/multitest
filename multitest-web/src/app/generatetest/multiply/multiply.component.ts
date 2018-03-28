import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'multiply',
  templateUrl: './multiply.component.html'
})
export class MultiplyComponent{
  multiplyForm = new FormGroup ({
    'multiple': new FormControl('',[Validators.required]),
    'totalQuestions': new FormControl('',[Validators.required]),
  });

  isError: boolean = false;
  errorMessage: string = '';

  constructor(private router: Router){
  }

  resetForm(){
    this.multiplyForm.get('multiple').reset();
    this.multiplyForm.get('totalQuestions').reset();
  }

  getMultiplySet(){

  }
}
