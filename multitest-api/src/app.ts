const express = require('express');

const bodyParser = require('body-parser');

import { MultiTest } from './multitest';

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

        router.route('/multiply')
              .get((req, res) => {
                    const name = req.query.name;
                    const multiple = parseInt(req.query.multiple);
                    const totalQuestions =  parseInt(req.query.totalQuestions);
                    const multi = new MultiTest();
                    res.json(
                        multi.generateMultiTest(name, multiple, totalQuestions),
                    );
                })
                .post( (req, res) => {
                    const multi = new MultiTest();
                    res.json(
                      multi.validateMultiTest(req.body),
                    );
                });

        this.express.use('/', router);
    }
}
export default new App().express;
