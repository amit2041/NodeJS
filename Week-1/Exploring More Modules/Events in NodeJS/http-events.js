//Import http for request and response data
const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.method == 'POST'){
        console.log(req.body);
        // Expecting data from client
        let body = '';
        req.on('data', (chunk)=>{
            body+= chunk.toString();
        })
        req.on('end', ()=>{
            console.log(body);
            res.end('data is received');
        });
    }else{
        console.log('Function ends here');
        res.end("Welcome to Node JS");

    }
});

server.listen(3100);
console.log("Sever is Listening on Port 3100")