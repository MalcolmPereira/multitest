import * as supertest from "supertest";

import app from "../src/app";

import { expect } from "chai";

describe("app", () => {

  it("Get Multiply", () =>
    supertest(app)
      .get("/basics?name=someuser&challengeNumber=2&totalQuestions=10&operator=multiply")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect(function(res){
          expect(res.body.challengeNumber).equal(2);
          expect(res.body.userName).equal("someuser");
          expect(res.body.operator).equal("multiply");
          expect(res.body.questions.length).equal(10);
          res.body.questions.forEach((question) => {
              expect(question.number1).equal(2);
              expect(question.number2).to.be.above(0);
              expect(question.userAnswer).equal(0);
          });
      })
  );

  it("Get Multiply - Error ", () =>
    supertest(app)
      .get("/basics")
      .expect("Content-Type", /json/)
      .expect(500)
      .expect(function(res){
            expect(res.body.error).equal(500);
            expect(res.body.errorMessage).equal("Valid User Name Required");
      })
  );

  it("Get Multiply - Error Challenge Number ", () =>
    supertest(app)
      .get("/basics?name=someuser")
      .expect("Content-Type", /json/)
      .expect(500)
      .expect(function(res){
            expect(res.body.error).equal(500);
            expect(res.body.errorMessage).equal("Valid Challenge Number Required");
      })
  );

  it("Get Multiply - Error Operator ", () =>
    supertest(app)
      .get("/basics?name=someuser&challengeNumber=2&totalQuestions=10")
      .expect("Content-Type", /json/)
      .expect(500)
      .expect(function(res){
            expect(res.body.error).equal(500);
            expect(res.body.errorMessage).equal("Valid Operator Required");
      })
  );

  it("Get Multiply Total Questions Less Than 10", () =>
    supertest(app)
      .get("/basics?name=someuser&challengeNumber=2&totalQuestions=5&operator=multiply")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect(function(res){
          expect(res.body.challengeNumber).equal(2);
          expect(res.body.userName).equal("someuser");
          expect(res.body.operator).equal("multiply");
          expect(res.body.questions.length).equal(10);
          res.body.questions.forEach((question) => {
              expect(question.number1).equal(2);
              expect(question.number2).to.be.above(0);
              expect(question.userAnswer).equal(0);
          });
      })
  );

  it("Get Multiply Total Questions Greater Than 50", () =>
    supertest(app)
      .get("/basics?name=someuser&challengeNumber=2&totalQuestions=100&operator=multiply")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect(function(res){
		  expect(res.body.challengeNumber).equal(2);
          expect(res.body.userName).equal("someuser");
          expect(res.body.operator).equal("multiply");
          expect(res.body.questions.length).equal(50);
          res.body.questions.forEach((question) => {
              expect(question.number1).equal(2);
              expect(question.number2).to.be.above(0);
              expect(question.userAnswer).equal(0);
          });
      })
  );

  it("Post Multiply", () =>
   supertest(app)
     .post("/basics")
     .send({
                "challengeNumber": 2,
                "operator": "multiply",
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
          })
     .set("Content-Type", "application/json")
     .set("Accept", "application/json")
     .expect("Content-Type", /json/)
     .expect(200)
     .expect(function(res){
          expect(res.body.challengeNumber).equal(2);
          expect(res.body.userName).equal("someuser");
          expect(res.body.questions.length).equal(10);
          expect(res.body.totalCorrect).equal(6);
          expect(res.body.totalWrong).equal(4);
          res.body.questions.forEach((question) => {
            expect(question.number1).equal(2);
            expect(question.userAnswer).not.equal(0);
            expect(question.correctAnswer).not.equal(0);
        });
     })
  );
});
