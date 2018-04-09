export enum IMultiTestOperator {
    MULTIPLY = "multiply",
    DIVIDE = "divide",
    DIVIDE_DECIMAL = "divide_decimal",
    PERCENTAGE = "percentage",
    FRACTIONS_ADD = "fraction_add",
    FRACTIONS_SUB = "fraction_sub",
    FRACTIONS_MULTIPLY = "fraction_multiply",
    FRACTIONS_DIVIDE = "fraction_divide"
}

export interface IMultiTestChallenge {
    challengeNumber: number;
    operator: IMultiTestOperator;
    questions: IMultiTestQuestion[];
    startTime: Date;
    totalTime?: string;
    totalCorrect?: number;
    totalWrong?: number;
    userName: string;
}

export interface IMultiTestQuestion {
    correct?: boolean;
    correctAnswer?: number;
    number1: number;
    number2: number;
    userAnswer: number;
}

export interface IMultiTest {
    generateMultiTest(userName: string, challengeNumber: number, totalQuestions: number, operator: IMultiTestOperator): IMultiTestChallenge;
    validateMultiTest(multiTest: IMultiTestChallenge): IMultiTestChallenge;
}

export interface IMultiTestType {
    generateQuestions(cNumber: number, tQuestions: number):IMultiTestQuestion[];
    validateQuestion(question: IMultiTestQuestion) : boolean;
}
