const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.method == 'POST'){
        // Expected data from clients
        let body = '';
        req.on('data', (chunk)=>{
            body+= chunk.toString();
        });
        req.on('end', ()=>{
            console.log(body);
            res.end("data is received");
        })
    }
    res.end('Welcome to Node JS');
})

server.listen(3100);
console.log('server is listening on port 3100')