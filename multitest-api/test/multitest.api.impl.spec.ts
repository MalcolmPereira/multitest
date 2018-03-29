import { IMultiTestOperator , IMultiTest, IMultiTestChallenge } from "../src/multitest.api";
import { MultiTestImpl } from "../src/multitest.api.impl";

import { expect } from "chai";

describe("multitest-api-impl", () => {

    it("generateMultiTest-Multiply", () => {
      const multiTest = new MultiTestImpl();
      const multiTestChallenge = multiTest.generateMultiTest("someuser", 2, 10, IMultiTestOperator.MULTIPLY);
      expect(multiTestChallenge.userName).equal("someuser");
      expect(multiTestChallenge.challengeNumber).equal(2);
      expect(multiTestChallenge.questions.length).equal(10);
      expect(multiTestChallenge.operator).equal("multiply");
      multiTestChallenge.questions.forEach((question) => {
        expect(question.number1).equal(2);
        expect(question.number2).to.be.above(0);
        expect(question.userAnswer).equal(0);
      });
    });

    it("validateMultiTest-Multiply", () => {
        const multiTestChallenge: IMultiTestChallenge = {
              "challengeNumber": 2,
              "operator": IMultiTestOperator.MULTIPLY,
              "questions": [
                {"number1": 2,"number2": 2,"userAnswer": 4},
                {"number1": 2,"number2": 3,"userAnswer": 6},
                {"number1": 2,"number2": 4,"userAnswer": 8},
                {"number1": 2,"number2": 5,"userAnswer": 10},
                {"number1": 2,"number2": 6,"userAnswer": 12},
                {"number1": 2,"number2": 7,"userAnswer": 14},
                {"number1": 2,"number2": 8,"userAnswer": 14},
                {"number1": 2,"number2": 9,"userAnswer": 14},
                {"number1": 2,"number2": 10,"userAnswer": 14},
                {"number1": 2,"number2": 11,"userAnswer": 14}
              ],
              "startTime": new Date("2018-03-20T20:53:37.530Z"),
              "userName": "someuser"
        }
        const multiTest = new MultiTestImpl();
        const multiTestChallengeValidated = multiTest.validateMultiTest(multiTestChallenge);
        expect(multiTestChallenge.userName).equal("someuser");
        expect(multiTestChallenge.challengeNumber).equal(2);
        expect(multiTestChallenge.questions.length).equal(10);
        expect(multiTestChallenge.totalCorrect).equal(6);
        expect(multiTestChallenge.totalWrong).equal(4);
        multiTestChallengeValidated.questions.forEach((question) => {
                 expect(question.number1).equal(2);
                 expect(question.userAnswer).not.equal(0);
                 expect(question.correctAnswer).not.equal(0);
       });
      });
});
