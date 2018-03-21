import * as supertest from "supertest";

import app from "../src/app";

import { expect } from "chai";

describe("app", () => {

  it("Get Multiply", () =>
    supertest(app)
      .get("/multiply?name=someuser&multiple=2&totalQuestions=10")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect(function(res){
          console.log(res.body);
          expect(res.body.multiple).equal(2);
          expect(res.body.userName).equal("someuser");
          expect(res.body.totalQuestions).equal(10);
          expect(res.body.questions.length).equal(10);
          res.body.questions.forEach((question) => {
              expect(question.multiple).equal(2);
              expect(question.userAnswer).equal(0);
              expect(question.correctAnswer).equal(0);
          });
      })
  );

  it("Post Multiply", () =>
   supertest(app)
     .post("/multiply")
     .send({
          "multiple" : 2,
          "questions": [
              {
                "correct": false,
                "correctAnswer": 0,
                "multiple": 2,
                "number": 4,
                "userAnswer": 8,
              },
              {
                  "correct": false,
                  "correctAnswer": 0,
                  "multiple": 2,
                  "number": 5,
                  "userAnswer": 10,
              },
              {
                  "correct": false,
                  "correctAnswer": 0,
                  "multiple": 2,
                  "number": 6,
                  "userAnswer": 10,
              },
              {
                  "correct": false,
                  "correctAnswer": 0,
                  "multiple": 2,
                  "number": 7,
                  "userAnswer": 10,
              },
              {
                  "correct": false,
                  "correctAnswer": 0,
                  "multiple": 2,
                  "number": 8,
                  "userAnswer": 10,
              },
              {
                  "correct": false,
                  "correctAnswer": 0,
                  "multiple": 2,
                  "number": 9,
                  "userAnswer": 10,
              },
              {
                  "correct": false,
                  "correctAnswer": 0,
                  "multiple": 2,
                  "number": 10,
                  "userAnswer": 10,
              },
              {
                  "correct": false,
                  "correctAnswer": 0,
                  "multiple": 2,
                  "number": 11,
                  "userAnswer": 10,
              },
              {
                  "correct": false,
                  "correctAnswer": 0,
                  "multiple": 2,
                  "number": 12,
                  "userAnswer": 10,
              },
              {
                  "correct": false,
                  "correctAnswer": 0,
                  "multiple": 2,
                  "number": 13,
                  "userAnswer": 10,
              },
          ],
          "startTime": new Date("2018-03-20T20:53:37.530Z"),
          "totalQuestions": 10,
          "totalTime": "",
          "userName": "someuser"
      })
     .set('Content-Type', 'application/json')
     .set('Accept', 'application/json')
     .expect("Content-Type", /json/)
     .expect(200)
     .expect(function(res){
        expect(res.body.multiple).equal(2);
        expect(res.body.userName).equal("someuser");
        expect(res.body.totalQuestions).equal(10);
        expect(res.body.questions.length).equal(10);
        res.body.questions.forEach((question) => {
            expect(question.multiple).equal(2);
            expect(question.userAnswer).not.equal(0);
            expect(question.correctAnswer).not.equal(0);
        });
     })
   );

});
