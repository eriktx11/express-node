const express = require('express');
const http = require('http');
const port = 3000;
const hostname = 'localhost';
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname+'/public'));

app.use((req, res, next) =>{
    res.statusCode=200;
    res.setHeader('Content-type','text/html');
    res.end('<html>express</html>');
});



const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log('runnigng');
});