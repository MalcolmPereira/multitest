import { Component, Input ,Output, EventEmitter, OnInit} from "@angular/core";

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { HttpErrorResponse  } from '@angular/common/http';

import { IBasicsChallenge, IBasicsQuestion } from './basics.model';

import { BasicsComponent } from "./basics.component";

import { BasicsService } from "./basics.service";

@Component({
  selector: "basics-questions",
  templateUrl: "./basics.questions.component.html"
})
export class BasicsQuestionsComponent extends BasicsComponent implements OnInit {

  @Input()
  basicsChallenge: IBasicsChallenge = undefined;

  @Output()
  basicsChallengeEvent = new EventEmitter<IBasicsChallenge>();

  questionsForm:FormGroup = undefined;

  constructor(private service: BasicsService){
    super();
    this.isError = false;
    this.errorMessage = "";
    this.basicsChallenge = undefined;
  }

  ngOnInit() {
    this.questionsForm = this.getFormGroup(this.basicsChallenge);
  }

  cancel(){
    this.basicsChallenge = undefined;
    this.basicsChallengeEvent.emit(undefined);
  }

  resetForm(){
    this.questionsForm.reset();
    this.isError = false;
    this.errorMessage = "";
  }

  processBasicsChallengeSubmit(){
      if(this.questionsForm && this.questionsForm.valid){
        this.basicsChallenge.questions.forEach( question => {
            question.userAnswer = this.questionsForm.get(question.idKey).value;
        });
        this.isError = false;
        this.errorMessage = "";
        this.service.submitQuestions(this.basicsChallenge)
            .subscribe(
              data => {
                this.basicsChallenge = data;
                this.basicsChallenge.complete = true;
                this.basicsChallengeEvent.emit(this.basicsChallenge);
              },
              err  => {
                this.processError(err);
              }
        );
      }
  }
}
