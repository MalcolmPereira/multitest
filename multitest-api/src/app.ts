const express = require("express");

const bodyParser = require("body-parser");

import { MultiTestImpl } from "./multitest.api.impl";

class App {

    public express;

    constructor() {
        this.express = express();
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(bodyParser.json());
        this.mountRoutes();
    }

    private mountRoutes(): void {

        const router = express.Router();

        router.route("/multiply")
              .get((req, res) => {
                    const name = req.query.name;
                    const challengeNumber = parseInt(req.query.challengeNumber);
                    const totalQuestions =  parseInt(req.query.totalQuestions);
                    const operator =  req.query.operator;
                    const multi = new MultiTestImpl();
                    try{
                        const challenge = multi.generateMultiTest(name, challengeNumber, totalQuestions,operator);
                        res.status(200).json(challenge);
                    }catch(error){
                        res.status(500).json({"error":500,"errorMessage": error.message});
                    }
                })
                .post( (req, res) => {
                    const multi = new MultiTestImpl();
                    try{
                        const challengeResult = multi.validateMultiTest(req.body);
                        res.status(200).json(challengeResult);
                    }catch(error){
                        res.status(500).json({"error":500,"errorMessage": error.message});
                    }
                });

        this.express.use("/", router);
    }
}
export default new App().express;
