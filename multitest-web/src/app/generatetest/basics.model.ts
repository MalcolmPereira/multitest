export enum IBasicsOperator {
    MULTIPLY = "multiply",
    DIVIDE = "divide",
    PERCENTAGE = "percentage",
    FRACTIONS_ADD = "fraction_add",
    FRACTIONS_SUB = "fraction_sub",
    FRACTIONS_MULTIPLY = "fraction_multiply",
    FRACTIONS_DIVIDE = "fraction_divide"
}

export interface IBasicsChallenge {
    challengeNumber: number;
    operator: IBasicsOperator;
    questions: IBasicsQuestion[];
    startTime: Date;
    totalTime?: string;
    totalCorrect?: number;
    totalWrong?: number;
    userName: string;
    complete?:boolean;
}

export interface IBasicsQuestion {
    correct?: boolean;
    correctAnswer?: number;
    number1: number;
    number2: number;
    userAnswer: number;
    idKey?: string;
    label?: string;
}
