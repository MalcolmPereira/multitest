import { expect } from "chai";

import { IMultiTestQuestion } from "../src/multitest.api";

import { MultiTestPercent } from "../src/multitest-percent";

describe("multitest-percent", () => {

  it("generateQuestions", () => {
        const multiTest = new MultiTestPercent();
        const multiTestQuestions: IMultiTestQuestion[] = multiTest.generateQuestions(0, 10);
        expect(multiTestQuestions.length).equal(10);
        multiTestQuestions.forEach((question) => {
          expect(question.number1).to.be.above(1);
          expect(question.number2).to.be.above(100);
        });
  });

  it("validateQuestion", () => {
        const multiTest = new MultiTestPercent();
        const multiTestQuestions: IMultiTestQuestion[] = multiTest.generateQuestions(0, 10);
        expect(multiTestQuestions.length).equal(10);
        multiTestQuestions.forEach((question) => {
          expect(question.number1).to.be.above(1);
          expect(question.number2).to.be.above(100);
          question.userAnswer = (question.number1 * question.number2 / 100);
        });
        multiTestQuestions.forEach((question) => {
             expect(multiTest.validateQuestion(question)).equal(true);
        });
        const multiTestQuestionsWrong: IMultiTestQuestion[] = multiTest.generateQuestions(0, 10);
        expect(multiTestQuestionsWrong.length).equal(10);
        multiTestQuestionsWrong.forEach((question) => {
          question.userAnswer = -1;
        });
        multiTestQuestionsWrong.forEach((question) => {
             expect(multiTest.validateQuestion(question)).equal(false);
        });
  });

});
