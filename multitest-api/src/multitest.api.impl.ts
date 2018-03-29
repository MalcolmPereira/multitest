import { IMultiTest, IMultiTestOperator, IMultiTestChallenge, IMultiTestQuestion } from "./multitest.api";

export class MultiTestImpl implements IMultiTest {

    public generateMultiTest(cUserName: string, cNumber: number, tQuestions: number, cOperator: IMultiTestOperator): IMultiTestChallenge {
      if(!cUserName){
        throw new Error("Valid User Name Required");
      }
      if(!cNumber){
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
      let counter: number = tQuestions;
      const max: number = tQuestions;
      const min: number = 1;
      const questionArr = [];
      const numberGeneratedList = [];
      while (counter >= 1) {
          const numberGenerated = Math.floor(Math.random() * (max - min + 1)) + min;
          if (numberGeneratedList.indexOf(numberGenerated) === -1) {
              const multiTestQuestion = this.getMultiTestQuestion(cNumber,numberGenerated,cOperator);
              questionArr.push(multiTestQuestion);
              numberGeneratedList.push(numberGenerated);
              counter--;
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
       const totalTime = Math.round(diff / 60000 );
       multiTest.totalTime = totalTime + " minutes to answer questions";
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

    private getMultiTestQuestion(cNumber: number,numberGenerated: number, cOperator: IMultiTestOperator): IMultiTestQuestion {
        return {
            "number1": cNumber,
            "number2": numberGenerated,
            "userAnswer": 0
        };
    }

    private validateQuestion(question: IMultiTestQuestion, cOperator: IMultiTestOperator): boolean {
        switch (cOperator) {
            case IMultiTestOperator.MULTIPLY:
                return this.validateMultiply(question);
            default:
                throw Error("Invalid not supported operator");
        }
    }

    private validateMultiply(question: IMultiTestQuestion) : boolean {
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
