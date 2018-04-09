import { expect } from "chai";

import { IMultiTestQuestion } from "../src/multitest.api";

import { MultiTestMultiply } from "../src/multitest-multiply";

describe("multitest-multiply-impl", () => {

    it("generateQuestions", () => {
          const multiTest = new MultiTestMultiply();
          const multiTestQuestions: IMultiTestQuestion[] = multiTest.generateQuestions(2, 10);
          expect(multiTestQuestions.length).equal(10);
          multiTestQuestions.forEach((question) => {
            expect(question.number1).equal(2);
            expect(question.number2).to.be.above(1);
          });
    });

});
