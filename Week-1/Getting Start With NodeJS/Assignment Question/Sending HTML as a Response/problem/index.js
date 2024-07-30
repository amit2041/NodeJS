// Please don't change the pre-written code

// Import the necessary modules here
//Import http library/module
const http = require('http');
//Import fs 
const fs = require('fs');

// Write your code here
//Create Server
const server = http.createServer((req, res)=>{
    const data = fs.readFileSync('index.html').toString();
    res.end(data);
});

//Specify a port listening to client's request
server.listen(8080,()=>{
    console.log("Server is listening on port 8080.")
});

module.exports = server;
