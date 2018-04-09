import {  IMultiTestType, IMultiTestOperator, IMultiTestQuestion } from "./multitest.api";

import {  MultiTestBase} from "./multitest.base";

export class MultiTestMultiply extends MultiTestBase implements IMultiTestType {

  public generateQuestions(cNumber: number, tQuestions: number) : IMultiTestQuestion[] {
    let counter: number = tQuestions;
    let nextSet = this.getNextSet(0);
    var min  = 2;
    var max  = nextSet[0][1];
    const questionArr = new Array<IMultiTestQuestion>();
    const numberGeneratedList = [];
    var setCounter  = 1;
    while (counter >= 1) {
      if(setCounter >  3 ) {
          setCounter  = 1;
          nextSet = this.getNextSet(max);
          min  = nextSet[0][0];
          max  = nextSet[0][1];
      }
      const numberGenerated = Math.floor(Math.random() * ((Math.floor(Math.random() * (max - min + 1)) + (Math.floor(Math.random() * (max - min + 1)) + min)) - (Math.floor(Math.random() * (max - min + 1)) + min) + 1)) + (Math.floor(Math.random() * (max - min + 1)) + min);
      if (numberGenerated > 1 && numberGeneratedList.indexOf(numberGenerated) === -1) {
          const multiTestQuestion = this.getMultiTestQuestion(cNumber,numberGenerated);
          questionArr.push(multiTestQuestion);
          numberGeneratedList.push(numberGenerated);
          counter--;
          setCounter++;
      }
    }
    return questionArr;
  }

  public validateQuestion(question: IMultiTestQuestion) : boolean {
      if (question.userAnswer === (question.number1 * question.number2)) {
          question.correct = true;
          question.correctAnswer = (question.number1 * question.number2);
          return true;
      }else{
          question.correct = false;
          question.correctAnswer = (question.number1 * question.number2);
          return false;
      }
  }
}
