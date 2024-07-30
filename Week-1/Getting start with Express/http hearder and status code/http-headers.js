const express = require('express');

const server = express();

// Write your code here
//GET Request
server.get('/', (req, res)=>{
    res.set('Content-Type', 'text/plain');
    res.set('Date', '28/07/2024');
    res.send('get');
});

//POST Request
server.post('/', (req, res)=>{
    res.send('post');
});

//PUT Request
server.put('/', (req, res)=>{
    res.send('put');
});

//DELETE Request
server.delete('/', (req, res)=>{
    res.send('delete');
});

server.listen(3200, () => {
    console.log("server is listening on port 3200");
  });