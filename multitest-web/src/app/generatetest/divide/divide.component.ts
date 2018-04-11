import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators} from "@angular/forms";
import { Router } from "@angular/router";

import { BasicsService } from "../basics.service";

import { BasicsComponent } from "../basics.component";

import { IBasicsOperator, IBasicsChallenge, IBasicsQuestion } from "../basics.model";

@Component({
  selector: "divide",
  templateUrl: "./divide.component.html"
})
export class DivideComponent extends BasicsComponent {

  challengeLabel: String = "Divisor";

  minNumberQuestions: number = 10;

  operator: IBasicsOperator = IBasicsOperator.DIVIDE;

  basicsChallenge: IBasicsChallenge = undefined;

  constructor(private router: Router, private service: BasicsService){
    super();
    this.isError = false;
    this.errorMessage = "";
    this.basicsChallenge = undefined;
  }

  cancel(){
    this.isError = false;
    this.errorMessage = "";
    this.basicsChallenge = undefined;
  }

  processGenerateEvent(data: IBasicsChallenge){
      data.questions.forEach( question => {
        question.idKey = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        question.label = question.number1 + "   /  " + question.number2+"    ";
      });
      this.basicsChallenge = data;
      this.basicsChallenge.complete = false;
  }

  processChallengeEvent(data: IBasicsChallenge){
    this.basicsChallenge = data;
  }
}
