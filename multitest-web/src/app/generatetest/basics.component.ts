import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IBasicsChallenge, IBasicsQuestion } from './basics.model';

import { HttpErrorResponse  } from '@angular/common/http';

export class BasicsComponent {

    isError: boolean = false;

    errorMessage: string = "";

    getFormGroup(basicsChallenge: IBasicsChallenge): FormGroup {
        let challengeFormGroup: any = {};

        basicsChallenge.questions.forEach(question => {
            challengeFormGroup[question.idKey] = new FormControl(undefined, Validators.required);
        });

        return new FormGroup(challengeFormGroup);
    }

    processError(err: HttpErrorResponse ){
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
