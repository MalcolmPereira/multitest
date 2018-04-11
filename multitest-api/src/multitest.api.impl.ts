import { IMultiTest, IMultiTestOperator, IMultiTestType, IMultiTestChallenge, IMultiTestQuestion } from "./multitest.api";

import { MultiTestMultiply } from "./multitest-multiply";
import { MultiTestDivide } from "./multitest-divide";
import { MultiTestPercent } from "./multitest-percent";

export class MultiTestImpl implements IMultiTest {

    private multiplyTest: IMultiTestType = new  MultiTestMultiply();
    private divideTest: IMultiTestType = new  MultiTestDivide();
    private percentTest: IMultiTestType = new  MultiTestPercent();

    public generateMultiTest(cUserName: string, cNumber: number, tQuestions: number, cOperator: IMultiTestOperator): IMultiTestChallenge {

      if(!cUserName){
        throw new Error("Valid User Name Required");
      }
      if(!cNumber && cOperator !== IMultiTestOperator.PERCENTAGE){
          throw new Error("Valid Challenge Number Required");
      }
      if(!cOperator){
        throw new Error("Valid Operator Required");
      }
      if(!tQuestions){
          tQuestions = 10;
      }
      if (cNumber < 1) {
          cNumber = 1;
      }
      if (cNumber > 100) {
        cNumber = 100;
      }
      if (tQuestions < 10) {
          tQuestions = 10;
      }
      if (tQuestions > 50) {
        tQuestions = 50;
      }

      var questionArr = [];

      switch(cOperator){
        case IMultiTestOperator.MULTIPLY: {
          questionArr = this.multiplyTest.generateQuestions(cNumber,tQuestions);
          break;
        }
        case IMultiTestOperator.DIVIDE: {
          questionArr = this.divideTest.generateQuestions(cNumber,tQuestions);
          break;
        }
        case IMultiTestOperator.PERCENTAGE: {
          questionArr = this.percentTest.generateQuestions(cNumber,tQuestions);
          break;
        }
        default: {
          throw new Error("Valid Operator Required");
        }
      }

      return {
          "challengeNumber": cNumber,
          "operator": cOperator,
          "questions": questionArr,
          "startTime": new Date(),
          "userName": cUserName
      };
    }

    public validateMultiTest(multiTest: IMultiTestChallenge): IMultiTestChallenge {
       const currentDate = new Date();
       const startDate = new Date(multiTest.startTime);
       const diff = ( currentDate.getTime() - startDate.getTime());
       const totalTime = Math.round((diff / 60000 ) * 100) / 100;
       multiTest.totalTime = totalTime + " minute(s) to answer "+multiTest.questions.length+" questions";
       multiTest.totalCorrect = 0;
       multiTest.totalWrong = 0;
       multiTest.questions.forEach((question) => {
            if(this.validateQuestion(question,multiTest.operator)){
                multiTest.totalCorrect++;
            }else{
                multiTest.totalWrong++;
            }
       });
       return multiTest;
    }

    private validateQuestion(question: IMultiTestQuestion, cOperator: IMultiTestOperator): boolean {
        switch (cOperator) {
            case IMultiTestOperator.MULTIPLY:
                return this.multiplyTest.validateQuestion(question);
            case IMultiTestOperator.DIVIDE:
                return this.divideTest.validateQuestion(question);
            case IMultiTestOperator.PERCENTAGE:
                return this.percentTest.validateQuestion(question);
            default:
                throw Error("Invalid not supported operator");
        }
    }
}
