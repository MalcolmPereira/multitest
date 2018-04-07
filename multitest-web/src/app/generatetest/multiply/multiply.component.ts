import { Component, } from "@angular/core";
import { FormGroup, FormControl, Validators} from "@angular/forms";
import { Router } from "@angular/router";

import { BasicsService } from "../basics.service";

import { BasicsComponent } from "../basics.component";


import { IBasicsOperator, IBasicsChallenge, IBasicsQuestion } from "../basics.model";

@Component({
  selector: "multiply",
  templateUrl: "./multiply.component.html"
})
export class MultiplyComponent extends BasicsComponent {

  multiplyForm = new FormGroup ({
    challengeNumber: new FormControl("",[Validators.required]),
    totalQuestions : new FormControl("",[Validators.required]),
  });

  multiplyFormSubmitForm:FormGroup = undefined;

  basicsChallenge: IBasicsChallenge = undefined;

  constructor(private router: Router, private service: BasicsService){
    super();
    this.isError = false;
    this.errorMessage = "";
    this.multiplyFormSubmitForm = undefined;
    this.basicsChallenge = undefined;
  }

  resetForm(){
    this.multiplyForm.reset();
    if(this.multiplyFormSubmitForm){
      this.multiplyFormSubmitForm.reset();
    }
    this.isError = false;
    this.errorMessage = "";
  }

  cancel(){
    this.multiplyForm.reset();
    this.isError = false;
    this.errorMessage = "";
    this.multiplyFormSubmitForm = undefined;
    this.basicsChallenge = undefined;
  }

  getMultiplySet(){
    this.isError = false;
    this.errorMessage = "";
    this.multiplyFormSubmitForm = undefined;
    this.basicsChallenge = undefined;
    this.service.getQuestions(this.multiplyForm.get("challengeNumber").value, this.multiplyForm.get("totalQuestions").value, IBasicsOperator.MULTIPLY)
        .subscribe(
              data => {
                  this.processBasicsChallenge(data);
                },
                err  => {
                  this.processError(err);
                }
        );
  }

  processBasicsChallenge(data: IBasicsChallenge){
      data.questions.forEach( question => {
        question.idKey = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        question.label = question.number1 + " X " + question.number2+"    ";
      });
      this.basicsChallenge = data;
      this.basicsChallenge.complete = false;
      this.multiplyFormSubmitForm = this.getFormGroup(this.basicsChallenge);
  }

  processBasicsChallengeSubmit(){
      if(this.multiplyFormSubmitForm && this.multiplyFormSubmitForm.valid){
        this.basicsChallenge.questions.forEach( question => {
            question.userAnswer = this.multiplyFormSubmitForm.get(question.idKey).value;
        });
        this.isError = false;
        this.errorMessage = "";
        this.service.submitQuestions(this.basicsChallenge)
            .subscribe(
              data => {
                console.log(data);
                this.basicsChallenge = data;
                this.basicsChallenge.complete = true;
              },
              err  => {
                this.processError(err);
              }
        );
      }
  }
}
