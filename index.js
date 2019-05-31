const express = require('express');
const http = require('http');
const port = 3000;
const hostname = 'localhost';
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
app.use(morgan ('dev'));
app.use(bodyParser.json());

app.all('/dishes',(req, res, next) => {
    res.statusCode =200;
    res.setHeader('Content-type', 'text/plain');
    next();
});

app.get('/dishes', (req, res, next)=>{
    res.end('Will do that');

});

app.post('/dishes', (req, res, next)=> {
    res.end('Will add'+req.body.esteVal);
});

app.get('/dishes/:stockId', (req, res, next)=>{
    res.end('Will do that with id with end');
});



app.use(express.static(__dirname+'/public'));

app.use((req, res, next)=>{
    res.statusCode=200;
    res.setHeader('Content-type','text/html');
    res.end('<html>express</html>');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log('runnigng');
});