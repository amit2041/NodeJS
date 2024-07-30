const express = require('express');

const server = express();

// Write your code here
//GET Request
server.get('/', (req, res)=>{
    res.send('get');
});

//POST Request
server.post('/', (req, res)=>{
    //status codes
    res.status(201).send('post');
});

//PUT Request
server.put('/', (req, res)=>{
    res.send('put');
});

//DELETE Request
server.delete('/', (req, res)=>{
    res.send('delete');
});

server.listen(3000, () => {
    console.log("server is listening on port 3000");
  });