import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators} from "@angular/forms";
import { Router } from "@angular/router";

import { BasicsService } from "../basics.service";

@Component({
  selector: "multiply",
  templateUrl: "./multiply.component.html"
})
export class MultiplyComponent{

  isError: boolean = false;

  errorMessage: string = "";

  private readonly CHALLENGE_NUMBER:string = "challengeNumber";
  private readonly TOTAL_QUESTIONS:string = "totalQuestions";
  multiplyForm = new FormGroup ({
    "challengeNumber": new FormControl("",[Validators.required]),
    "totalQuestions" : new FormControl("",[Validators.required]),
  });

  constructor(private router: Router, private service: BasicsService){
  }

  resetForm(){
    this.multiplyForm.get(this.CHALLENGE_NUMBER).reset();
    this.multiplyForm.get(this.TOTAL_QUESTIONS).reset();
  }

  getMultiplySet(){
    console.log("Challenge Number",this.multiplyForm.get(this.CHALLENGE_NUMBER).value);
    console.log("Total Questions ",this.multiplyForm.get(this.TOTAL_QUESTIONS).value);
    this.service.getMultiplyQuestions(this.multiplyForm.get(this.CHALLENGE_NUMBER).value,
        this.multiplyForm.get(this.TOTAL_QUESTIONS).value).subscribe(
            data => { console.log(data);},
            err  => { console.log(err);}
         );
  }
}
