import { Component, Input ,Output, EventEmitter, OnInit} from "@angular/core";

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { HttpErrorResponse  } from '@angular/common/http';

import { IBasicsOperator, IBasicsChallenge, IBasicsQuestion } from './basics.model';

import { BasicsComponent } from "./basics.component";

import { BasicsService } from "./basics.service";

@Component({
  selector: "basics-generate",
  templateUrl: "./basics.generate.component.html"
})
export class BasicsGenerateQuestionsComponent extends BasicsComponent implements OnInit {

  @Input()
  challengeLabel: String = undefined;

  @Input()
  minNumberQuestions: number;

  @Input()
  operator: IBasicsOperator = undefined;

  @Output()
  basicsChallengeEvent = new EventEmitter<IBasicsChallenge>();

  generateForm:FormGroup = undefined;

  constructor(private service: BasicsService){
    super();
    this.isError = false;
    this.errorMessage = "";
  }

  ngOnInit() {
    if(this.operator === IBasicsOperator.PERCENTAGE){
      this.generateForm = new FormGroup ({
        challengeNumber: new FormControl(0),
        totalQuestions : new FormControl(this.minNumberQuestions,[Validators.required]),
      });
    }else{
      this.generateForm = new FormGroup ({
        challengeNumber: new FormControl(undefined,[Validators.required]),
        totalQuestions : new FormControl(this.minNumberQuestions,[Validators.required]),
      });
    }

  }

  cancel(){
    this.generateForm.reset();
    this.basicsChallengeEvent.emit(undefined);
  }

  resetForm(){
    this.generateForm.reset();
    this.isError = false;
    this.errorMessage = "";
  }

  getQuestions(){
    this.isError = false;
    this.errorMessage = "";
    this.service.getQuestions(this.generateForm.get("challengeNumber").value, this.generateForm.get("totalQuestions").value, this.operator)
        .subscribe(
              data => {
                  this.basicsChallengeEvent.emit(data);
              },
              err  => {
                  this.processError(err);
              }
        );
  }
}
