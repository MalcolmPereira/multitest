import { expect } from "chai";

import { IMultiTestQuestion } from "../src/multitest.api";

import { MultiTestDivide } from "../src/multitest-divide";

describe("multitest-divide", () => {

    it("generateQuestions", () => {
          const multiTest = new MultiTestDivide();
          const multiTestQuestions: IMultiTestQuestion[] = multiTest.generateQuestions(2, 10);
          expect(multiTestQuestions.length).equal(10);
          multiTestQuestions.forEach((question) => {
            expect(question.number1).to.be.above(2);
            expect(question.number2).equal(2);
          });
    });

    it("validateQuestion", () => {
        const multiTest = new MultiTestDivide();
        const multiTestQuestions: IMultiTestQuestion[] = multiTest.generateQuestions(2, 10);
        expect(multiTestQuestions.length).equal(10);
        multiTestQuestions.forEach((question) => {
          question.userAnswer = (question.number1 / question.number2);
        });
        multiTestQuestions.forEach((question) => {
              expect(multiTest.validateQuestion(question)).equal(true);
        });
        const multiTestQuestionsWrong: IMultiTestQuestion[] = multiTest.generateQuestions(2, 10);
        expect(multiTestQuestionsWrong.length).equal(10);
        multiTestQuestionsWrong.forEach((question) => {
          question.userAnswer = 1;
        });
        multiTestQuestionsWrong.forEach((question) => {
              expect(multiTest.validateQuestion(question)).equal(false);
        });
    });
});
