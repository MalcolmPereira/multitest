import { Component, Input ,Output, EventEmitter, OnInit} from "@angular/core";

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { HttpErrorResponse  } from '@angular/common/http';

import { IBasicsChallenge, IBasicsQuestion } from './basics.model';

import { BasicsComponent } from "./basics.component";

import { BasicsService } from "./basics.service";

@Component({
  selector: "basics-results",
  templateUrl: "./basics.results.component.html"
})
export class BasicsResultsComponent extends BasicsComponent {

  @Input()
  basicsChallenge: IBasicsChallenge = undefined;

  @Output()
  basicsChallengeEvent = new EventEmitter<IBasicsChallenge>();

  constructor(private service: BasicsService){
    super();
    this.isError = false;
    this.errorMessage = "";
    this.basicsChallenge = undefined;
  }

  cancel(){
    this.basicsChallenge = undefined;
    this.basicsChallengeEvent.emit(undefined);
  }
}
