// Please don't change the pre-written code
// Import the necessary modules here
const http = require('http');

// Write your code here
const port = 8080;
const server = http.createServer((req, res)=>{
    res.end("Response received at port 8080.");
});

//Specify a port to listen to client's Request
server.listen(port, ()=>{
    console.log("Server is listening on port 8080");
});

module.exports = server;
