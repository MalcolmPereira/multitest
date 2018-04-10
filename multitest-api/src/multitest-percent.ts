import {  IMultiTestType, IMultiTestOperator, IMultiTestQuestion } from "./multitest.api";

import {  MultiTestBase} from "./multitest.base";

export class MultiTestPercent  extends MultiTestBase implements IMultiTestType {

    private readonly baseNumbers:number[] = [100,200,300,400,500,600,700,800,900,1000,1100,1200];

    generateQuestions(cNumber: number, tQuestions: number):IMultiTestQuestion[] {
        let jumpSet:number  = (tQuestions > 10) ? 3 : 5;
        const questionArr:IMultiTestQuestion[] = this.generateSimpleSet(jumpSet);
        return questionArr;
    }

    validateQuestion(question: IMultiTestQuestion) : boolean {
        return false;
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
}
