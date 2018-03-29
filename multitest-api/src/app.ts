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
                    res.json(
                        multi.generateMultiTest(name, challengeNumber, totalQuestions,operator)
                    );
                })
                .post( (req, res) => {
                    const multi = new MultiTestImpl();
                    res.json(
                      multi.validateMultiTest(req.body),
                    );
                });

        this.express.use("/", router);
    }
}
export default new App().express;
