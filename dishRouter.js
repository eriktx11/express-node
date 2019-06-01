const express = require ('express');
const bodyParser = require ('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    next();
})
.get((req, res, next) =>{
    res.send('Serving dish in folder');
});

dishRouter.route('/:dishID')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    next();
})
.get((req, res, next) =>{
    res.send('Serving dish  34 in folder');
});

module.exports = dishRouter;