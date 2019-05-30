const express = require('express');
const port = 3000;
const hostname = 'localhost';
const http = require('http');

const app = express();

app.use((req, res, next)=>{
    res.statusCode = 200;
    res.setHeader('Content-type','text/html');
    res.end('<html>Express server</html>');
});

const server = http.createServer(app);

server.listen(port, hostname, ()=>{
    console.log('Listen');
});