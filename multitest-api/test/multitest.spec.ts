import { MultiTest } from "../src/multitest";
import { IMultiTestChallenge } from "../src/multitest";


import { expect } from "chai";

describe("multitest", () => {

  it("generateMultiTest", () => {
      const multiTest = new MultiTest();
      const multiTestChallenge = multiTest.generateMultiTest("someuser", 2, 10);
      expect(multiTestChallenge.userName).equal("someuser");
      expect(multiTestChallenge.totalQuestions).equal(10);
      expect(multiTestChallenge.questions.length).equal(10);
      multiTestChallenge.questions.forEach((question) => {
        expect(question.multiple).equal(2);
        expect(question.userAnswer).equal(0);
        expect(question.correctAnswer).equal(0);
        expect(question.correct).equal(false);
      });
  });

  it("validateMultiTest", () => {
      const multiTestChallenge: IMultiTestChallenge = {
          multiple: 2,
          questions: [
              {
                correct: false,
                correctAnswer: 0,
                multiple: 2,
                number: 4,
                userAnswer: 8,
              },
              {
                  correct: false,
                  correctAnswer: 0,
                  multiple: 2,
                  number: 5,
                  userAnswer: 10,
              },
              {
                  correct: false,
                  correctAnswer: 0,
                  multiple: 2,
                  number: 6,
                  userAnswer: 10,
              },
              {
                  correct: false,
                  correctAnswer: 0,
                  multiple: 2,
                  number: 7,
                  userAnswer: 10,
              },
              {
                  correct: false,
                  correctAnswer: 0,
                  multiple: 2,
                  number: 8,
                  userAnswer: 10,
              },
              {
                  correct: false,
                  correctAnswer: 0,
                  multiple: 2,
                  number: 9,
                  userAnswer: 10,
              },
              {
                  correct: false,
                  correctAnswer: 0,
                  multiple: 2,
                  number: 10,
                  userAnswer: 10,
              },
              {
                  correct: false,
                  correctAnswer: 0,
                  multiple: 2,
                  number: 11,
                  userAnswer: 10,
              },
              {
                  correct: false,
                  correctAnswer: 0,
                  multiple: 2,
                  number: 12,
                  userAnswer: 10,
              },
              {
                  correct: false,
                  correctAnswer: 0,
                  multiple: 2,
                  number: 13,
                  userAnswer: 10,
              },
          ],
          startTime: new Date("2018-03-20T20:53:37.530Z"),
          totalQuestions: 10,
          totalTime: "",
          userName: "someuser",
      };
      const multiTest = new MultiTest();
      const multiTestChallengeValidated = multiTest.validateMultiTest(multiTestChallenge);
      expect(multiTestChallengeValidated.userName).equal("someuser");
      expect(multiTestChallengeValidated.totalQuestions).equal(10);
      expect(multiTestChallengeValidated.questions.length).equal(10);
      multiTestChallengeValidated.questions.forEach((question) => {
          expect(question.multiple).equal(2);
          expect(question.userAnswer).not.equal(0);
          expect(question.correctAnswer).not.equal(0);
      });
  });

});
