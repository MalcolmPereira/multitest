export enum IBasicsOperator {
    MULTIPLY = "multiply"
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
}

export interface IBasicsQuestion {
    correct?: boolean;
    correctAnswer?: number;
    number1: number;
    number2: number;
    userAnswer: number;
}
