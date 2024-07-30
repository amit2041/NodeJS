// Please don't change the pre-written code

const express = require("express");
const server = express();

// Write your code here
//GET Request
server.get('/', (req, res)=>{
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

module.exports = server;
