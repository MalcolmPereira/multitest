import {  IMultiTestType, IMultiTestOperator, IMultiTestQuestion } from "./multitest.api";

import {  MultiTestBase} from "./multitest.base";

export class MultiTestPercent  extends MultiTestBase implements IMultiTestType {

    private readonly baseNumbers:number[] = [100,200,300,400,500,600,700,800,900,1000,1100,1200];

    generateQuestions(cNumber: number, tQuestions: number):IMultiTestQuestion[] {
        let jumpSet:number  = (tQuestions > 10) ? 3 : 5;
        let questionArr:IMultiTestQuestion[] = this.generateSimpleSet(jumpSet);
        questionArr = questionArr.concat(this.generateBasicSet(tQuestions - questionArr.length));
        return questionArr;
    }

    validateQuestion(question: IMultiTestQuestion) : boolean {
        if (question.userAnswer === (question.number1 * question.number2 / 100) ) {
            question.correct = true;
            question.correctAnswer = (question.number1 * question.number2 / 100);
            return true;
          }else{
            question.correct = false;
            question.correctAnswer = (question.number1 * question.number2 / 100);
            return false;
          }
    }

    private generateSimpleSet(simpleSetTotal: number):IMultiTestQuestion[]  {
        const questionArr:IMultiTestQuestion[] = [];
        const baseNumbersGeneratedList:number[] = [];
        const numberGeneratedList:number[] = [];

        let counter:number = simpleSetTotal;
        let nextSet = this.getNextSet(0);
        let min  = 2;
        let max  = nextSet[0][1];
        while (counter >= 1) {
            const baseNumbersGenerated:number =  Math.floor(Math.random() * (this.baseNumbers.length - 1)) + 1;
            if (baseNumbersGeneratedList.indexOf(baseNumbersGenerated) === -1) {
                var numberGenerated:number = Math.floor(Math.random() * ((Math.floor(Math.random() * (max - min + 1)) + (Math.floor(Math.random() * (max - min + 1)) + min)) - (Math.floor(Math.random() * (max - min + 1)) + min) + 1)) + (Math.floor(Math.random() * (max - min + 1)) + min);
                if (numberGenerated > 1 && numberGeneratedList.indexOf(numberGenerated) === -1) {
                    questionArr.push(this.getMultiTestQuestion(numberGenerated,this.baseNumbers[baseNumbersGenerated]));
                    numberGeneratedList.push(numberGenerated);
                    baseNumbersGeneratedList.push(baseNumbersGenerated);
                    counter--;
                }
            }
        }
        return questionArr;
    }

    private generateBasicSet(simpleSetTotal: number):IMultiTestQuestion[]  {
        const questionArr:IMultiTestQuestion[] = [];
        const numberGeneratedList:number[] = [];

        let counter:number = simpleSetTotal;
        let nextSet = this.getBasicSet(0);
        let min  = nextSet[0][0];
        let max  = nextSet[0][1];

        let setCounter:number  = 1;
        let basicSetCounter:number  = 1;
        let jumpSet:number = 5;

        while (counter >= 1) {
            if(setCounter >  jumpSet ) {
              setCounter = 1;
              basicSetCounter++;
              nextSet = this.getBasicSet(basicSetCounter);
              min  = nextSet[0][0];
              max  = nextSet[0][1];
            }
            const baseNumberGenerated:number =  Math.floor(Math.random() * (99 - 2)) + 2;
            var numberGenerated:number = Math.floor(Math.random() * ((Math.floor(Math.random() * (max - min + 1)) + (Math.floor(Math.random() * (max - min + 1)) + min)) - (Math.floor(Math.random() * (max - min + 1)) + min) + 1)) + (Math.floor(Math.random() * (max - min + 1)) + min);
            if (numberGeneratedList.indexOf(numberGenerated) === -1) {
                  questionArr.push(this.getMultiTestQuestion(baseNumberGenerated,numberGenerated));
                  numberGeneratedList.push(numberGenerated);
                  counter--;
                  setCounter++;
            }
        }

        return questionArr;
    }

    private getBasicSet(max):number[][] {
         if(max > 0){
            return [[(max)*100,(max*2)*89]];
          }
          return [[1*100,200]];
    }
}
