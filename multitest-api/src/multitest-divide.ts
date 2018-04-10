import {  IMultiTestType, IMultiTestOperator, IMultiTestQuestion } from "./multitest.api";

import {  MultiTestBase} from "./multitest.base";

export class MultiTestDivide  extends MultiTestBase implements IMultiTestType {

    generateQuestions(cNumber: number, tQuestions: number):IMultiTestQuestion[] {
        let counter: number = tQuestions;
        let nextSet: number[][] = this.getNextSet(0);
        let min: number  = 2;
        let max: number  = nextSet[0][1];
        const questionArr:IMultiTestQuestion[] = [];
        const numberGeneratedList:number[] = [];
        let setCounter  = 1;
        while (counter >= 1) {
            if(setCounter >  3 ) {
                setCounter  = 1;
                nextSet = this.getNextSet(max);
                min  = nextSet[0][0];
                max  = nextSet[0][1];
            }
            let numberGenerated: number = Math.floor(Math.random() * ((Math.floor(Math.random() * (max - min + 1)) + (Math.floor(Math.random() * (max - min + 1)) + min)) - (Math.floor(Math.random() * (max - min + 1)) + min) + 1)) + (Math.floor(Math.random() * (max - min + 1)) + min);
            if (numberGenerated > 1 && numberGeneratedList.indexOf(numberGenerated) === -1) {
                questionArr.push(this.getMultiTestQuestion((numberGenerated * cNumber),cNumber));
                numberGeneratedList.push(numberGenerated);
                counter--;
                setCounter++;
            }
        }
        return questionArr;
    }

    validateQuestion(question: IMultiTestQuestion) : boolean{
        if (question.userAnswer === (question.number1 / question.number2)) {
            question.correct = true;
            question.correctAnswer = (question.number1 / question.number2);
            return true;
        }else{
            question.correct = false;
            question.correctAnswer = (question.number1 / question.number2);
            return false;
        }
    }
}
