import { Component} from "@angular/core";
import { FormGroup, FormControl, Validators} from "@angular/forms";
import { Router } from "@angular/router";

import { BasicsService } from "../basics.service";

import { HttpErrorResponse  } from '@angular/common/http';

@Component({
  selector: "multiply",
  templateUrl: "./multiply.component.html"
})
export class MultiplyComponent{

  isError: boolean = false;

  errorMessage: string = "";

  multiplyForm = new FormGroup ({
    challengeNumber: new FormControl("",[Validators.required]),
    totalQuestions : new FormControl("",[Validators.required]),
  });

  constructor(private router: Router, private service: BasicsService){
    this.isError = false;
    this.errorMessage = "";
  }

  resetForm(){
    this.multiplyForm.reset();
    this.isError = false;
    this.errorMessage = "";
  }

  getMultiplySet(){
    this.isError = false;
    this.errorMessage = "";
    this.service.getMultiplyQuestions(this.multiplyForm.get("challengeNumber").value,   this.multiplyForm.get("totalQuestions").value).subscribe(
            data => {
              console.log(data);
            },
            err  => {
                this.evaluateError(err);
            }
         );
  }

  private evaluateError(err: HttpErrorResponse ){
    console.log(err);
    switch(err.status){
      case 0:
           this.errorMessage = "Cannot connect to service, please try again later";
           this.isError = true;
           break;
      default:
           if(err.error){
             this.isError = true;
             this.errorMessage = err.error.errorMessage;
           }else{
              this.errorMessage = "Internal server error from service, please try again later";
             this.isError = true;
           }
    }
  }
}
