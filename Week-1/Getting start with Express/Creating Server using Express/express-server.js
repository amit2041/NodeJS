const express = require('express');

// create server

const server = express();

//Handle default request

server.get('/', (req, res)=>{
    res.send('Welcome to Express Server')
});

//listen on specific port

server.listen(3100, ()=>{
    console.log('Server is listening on 3100');
});