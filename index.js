const http = require('http');
const port = 3000;
const hostname = 'localhost';
const fs = require('fs');
const path = require('path');


const server = http.createServer((res,req) => {
    
    if(req.method == 'GET'){
        var fileUrl;
        if(req.url =='/') fileUrl = './index.html';
        else fileUrl = req.url;

        var filePath = path.resolve('./public'+fileUrl);
        const fileExt = path.extname(filePath);
        
        if(fileExt == '.html'){
            fs.exists(filePath, (exists)=>{
                if(!exists){
                    res.statusCode = 404;
                    console.log("Valid ");
                    res.setHeader('Content-type', 'text/html');
                    res.end('<html><body></h1>Nothing here</h1></doby></html>');
                    return;
                    }
            });
        }

    }

})

server.listen(port,hostname);
console.log("server running");
