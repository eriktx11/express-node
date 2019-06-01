const express = require('express');
const http = require('http');
const port = 3000;
const hostname ='localhost';
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./dishRouter');

const app = express();
app.use(morgan ('dev'));
app.use(bodyParser.json());

app.use('/dishes', dishRouter);

app.use(express.static(__dirname+'/public'));

const server = http.createServer(app);

server.listen(port, hostname, ()=>{
    console.log('running');
})