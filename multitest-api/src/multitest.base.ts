import { IMultiTestQuestion } from "./multitest.api";

export class MultiTestBase  {

  getMultiTestQuestion(cNumber: number,numberGenerated: number): IMultiTestQuestion {
      return {
          "number1": cNumber,
          "number2": numberGenerated,
          "userAnswer": 0
      };
  }

  getNextSet(max: number) : number[][]  {
      if(max > 0){
          return [[max+1, (max+19)]];
      }
      return [[max+1, max+9]];
  }
}
