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

  getMultiplySet(){
    if(this.multiplyForm.valid){
      console.log("got Values",this.multiplyForm.get('multiple').value,)
    }
  }

}
