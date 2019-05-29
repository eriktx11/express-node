const http = require('http');
const port = 3000;
const hostname = 'localhost';
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {

    if(req.method=='GET'){
        var fileUrl;
        if (req.url=='/') fileUrl ='/index.html' ;
        else fileUrl = req.url;

            var filePath = path.resolve('./public'+fileUrl);
            const fileExt = path.extname(filePath);
            if( fileExt == '.html')
            {
            fs.exists(filePath, (exists)=> {
                if(!exists){
                    res.statusCode=404;
                    res.setHeader('Constant-type', 'html/text');
                    res.end('<html>errror</html>');
    
                    return;
                }
                res.statusCode=200;
                res.setHeader('Constant-type', 'html/text');
                fs.createReadStream(filePath).pipe(res);
            })
            return;

        }
        
    }


});

server.listen(port, hostname, () =>{
    console.log("running...")
})