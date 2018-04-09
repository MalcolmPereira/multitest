import {  IMultiTestType, IMultiTestOperator, IMultiTestQuestion } from "./multitest.api";

import {  MultiTestBase} from "./multitest.base";

export class MultiTestPercent  extends MultiTestBase implements IMultiTestType {

    generateQuestions(cNumber: number, tQuestions: number):IMultiTestQuestion[] {
        return undefined;
    }

    validateQuestion(question: IMultiTestQuestion) : boolean {
        return false;
    }
}
