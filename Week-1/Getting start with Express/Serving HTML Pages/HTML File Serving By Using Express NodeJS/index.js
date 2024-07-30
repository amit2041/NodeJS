const express = require('express');
const fs = require('fs');

const server = express()
server.get('/', (req, res)=>{
   return res.send('Welcome to Express');
});

//my static files are in public folder which can accessed directly!
server.use(express.static('public'));


server.listen(3500);
console.log('Server is listening on 3500');