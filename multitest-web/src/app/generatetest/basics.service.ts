import { Injectable, Inject } from '@angular/core';
import { Http, RequestOptions, Response, Headers} from '@angular/http';
import { APP_CONFIG, IAppConfig} from '../common/index';
import { Observable } from "rxjs";

@Injectable()
export class BasicsService {

    constructor(@Inject(APP_CONFIG) private config: IAppConfig, private http: Http) {
    }


    getMultiplyQuestions(userName: string, multiple: number, totalQuestions: number){
       let API_URL = this.config.MULTIPLY_SERVICE+'?name='+userName+'&multiple='+multiple+'&totalQuestions='+totalQuestions;

        return this.http.get(API_URL)
          .map((response: Response) => {
              })
          .catch((error: any) => {
              return Observable.throw(error.status);
          });
        }
      }

}
