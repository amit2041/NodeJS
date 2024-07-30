// Import http library/module
const http = require('http');
const fs = require('fs');

//Create server
const server = http.createServer((req, res)=>{
    const data = fs.readFileSync('index.html').toString();
    res.end(data);
});

//Specify a port
server.listen(3300, ()=>{
    console.log("Server is listening on port 3300");
})