const express = require('express');
const http = require('http');
const port = 3000;
const hostname ='localhost';
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
app.use(morgan ('dev'));
app.use(bodyParser.json());

app.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    next();
});

app.get('/dishes', (req, res, next) =>{
    res.send('Serving text in folder');
});


app.use(express.static(__dirname+'/public'));

const server = http.createServer(app);

server.listen(port, hostname, ()=>{
    console.log('running');
})