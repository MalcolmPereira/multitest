import { expect } from "chai";

import { IMultiTestQuestion } from "../src/multitest.api";

import { MultiTestPercent } from "../src/multitest-percent";

describe("multitest-percent", () => {

  it("generateQuestions", () => {
        const multiTest = new MultiTestPercent();
        const multiTestQuestions: IMultiTestQuestion[] = multiTest.generateQuestions(0, 10);
        expect(multiTestQuestions.length).equal(5);
        console.log(multiTestQuestions);
        multiTestQuestions.forEach((question) => {
          expect(question.number1).to.be.above(0);
          expect(question.number2).to.be.above(0);
        });
  });


});
