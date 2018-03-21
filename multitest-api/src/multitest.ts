export class MultiTest {

    public generateMultiTest(cUserName: string, cNumber: number, totalQuestions: number): IMultiTestChallenge {
        if (cNumber < 1) {
            cNumber = 1;
        }
        if (totalQuestions < 10) {
            totalQuestions = 10;
        }
        if (totalQuestions > 50) {
          totalQuestions = 50;
        }
        let counter: number = totalQuestions;
        const max: number = totalQuestions;
        const min: number = 1;
        const questionArr = [];
        const numberGeneratedList = [];
        while (counter >= 1) {
            const numberGenerated = Math.floor(Math.random() * (max - min + 1)) + min;
            if (numberGeneratedList.indexOf(numberGenerated) === -1) {
                const multiTestQuestions: IMultiTestQuestions =  {
                    correct: false,
                    correctAnswer: 0,
                    multiple: cNumber,
                    number: numberGenerated,
                    userAnswer: 0,
                };
                questionArr.push(multiTestQuestions);
                numberGeneratedList.push(numberGenerated);
                counter--;
            }
        }
        return {
            multiple: cNumber,
            questions: questionArr,
            startTime: new Date(),
            totalQuestions: questionArr.length,
            totalTime: '',
            userName: cUserName,
        };
    }

    public validateMultiTest(multiTest: IMultiTestChallenge): IMultiTestChallenge {
        const currentDate = new Date();
        const startDate = new Date(multiTest.startTime);
        const diff = ( currentDate.getTime() - startDate.getTime());
        const totalTime = Math.round(diff / 60000 );
        multiTest.totalTime = totalTime + ' minutes to answer questions';
        multiTest.questions.forEach((question) => {
            if (question.userAnswer === (question.multiple * question.number)) {
                question.correct = true;
                question.correctAnswer = (question.multiple * question.number);
            } else {
                question.correct = false;
                question.correctAnswer = (question.multiple * question.number);
            }
        });
        return multiTest;
    }
}

export interface IMultiTestChallenge {
    multiple: number;
    startTime: Date;
    questions: IMultiTestQuestions[];
    totalQuestions: number;
    totalTime: string;
    userName: string;
}

export interface IMultiTestQuestions {
    correct: boolean;
    correctAnswer: number;
    multiple: number;
    number: number;
    userAnswer: number;
}
