const http = require('http');
const port = 3000;
const hostname = 'localhost';
const fs = require ('fs');
const path = require ('path');

const server = http.createServer((req, res) => {
    if(req.method == 'GET'){
        var fileName;
        if(req.url == '/') fileName = '/index.html';
        else fileName = req.url;

        var filePath  = path.resolve('./public'+fileName);
        const fileExt = path.extname(filePath);
        if(fileExt == '.html'){
            fs.exists(filePath, (exists)=>{
                if(!exists){
                    res.statusCode = 404;
                    res.setHeader('Content-type','text/html');
                    res.end('<html>doesnt exist</html>');

                    return;
                }
                res.statusCode = 200;
                res.setHeader('Content-type','text/html');
                fs.createReadStream(filePath).pipe(res);
            });
           
        }
        
    }
});

server.listen(port, hostname, ()=>{
    console.log('Listen');
});