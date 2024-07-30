const http = require('http');

const server = http.createServer((req, res)=>{
    res.write('This is coming from NodeJS Server.');

    if(req.url == '/first'){
        res.end('This is first response');
    }else{
        res.end("This is default response");
    }
});

server.listen(3100, (req, res)=>{
    console.log("Server is listening at port 3100");
});
