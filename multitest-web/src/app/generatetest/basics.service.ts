import { Injectable, Inject } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG, IAppConfig} from "../common/index";
import { Observable } from "rxjs";

import { IBasicsOperator, IBasicsChallenge } from "./basics.model";

import { UserService } from "../user/index"

@Injectable()
export class BasicsService {

    private readonly NAME:string = "name";
    private readonly CHALLENGE_NUMBER:string = "challengeNumber";
    private readonly TOTAL_QUESTIONS:string = "totalQuestions";
    private readonly OPERATOR:string = "operator";

    constructor(@Inject(APP_CONFIG) private config: IAppConfig, private http: HttpClient, private userService: UserService) {
    }

    getMultiplyQuestions(challengeNumber: number, totalQuestions: number) : Observable<IBasicsChallenge>  {
        let API_URL = this.config.MULTIPLY_SERVICE+"?"+this.NAME+"="+this.userService.getCurrentUser().name+"&"+this.CHALLENGE_NUMBER+"="+challengeNumber+"&"+this.TOTAL_QUESTIONS+"="+totalQuestions+"&"+this.OPERATOR+"="+IBasicsOperator.MULTIPLY;
        return this.http.get<IBasicsChallenge>(API_URL);
    }
}