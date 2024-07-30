const express = require('express');

//Create server
const server = express();

//Handle default request or 1st 

server.use((req, res, next)=>{
    console.log('first middleware hit');
    next();
});

//2nd Middleware

server.get('/', (req, res)=>{
    res.send("Hello World! This is Express Server");
});

//Assign port
server.listen(3100, ()=>{
    console.log("Server running at http://localhost:3100");
});