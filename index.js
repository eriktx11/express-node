const http = require('http');
const hostname = 'localhost';
const port = 3000;
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) =>{
    console.log("Requesting "+req.url+" "+req.method);
    //res.statusCode = 200;

    //res.setHeader('Content-type','text/html');
    //res.end('<html><body><h1>asd fasd</h1></body></html>');

    if(req.method == 'GET'){
        var fileUrl;
        if(req.url=='/') fileUrl = '/index.html';
        else fileUrl = req.url;

        var filePath = path.resolve('./public'+fileUrl);
        const fileExt = path.extname(filePath);
        if(fileExt == '.html'){
            fs.exists(filePath, (exists)=> {
                if(!exists){
                    res.statusCode = 404;
                    res.setHeader('Content-type','text/html');
                    res.end('<html><body><h1>Not found</h1></body></html>');

                    return;
                }
                res.statusCode = 200;
                res.setHeader('Content-type','text/html');
                fs.createReadStream(filePath).pipe(res);
            })
        }
        else{
            res.statusCode = 404;
            res.setHeader('Content-type','text/html');
            res.end('<html><body><h1>Not html file</h1></body></html>');

            return;
        }
    }
    else{
        res.statusCode = 404;
        res.setHeader('Content-type','text/html');
        res.end('<html><body><h1>Not supported</h1></body></html>');

        return;

    }
})

server.listen(port,hostname, () => {
    console.log("listenind in port: "+port);
});

