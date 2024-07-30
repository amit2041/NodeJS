//Create a server by using nodeJS
// Import http library/module
const http = require('http');
//create a server
const server = http.Server((req, res)=>{
    console.log(req.url);
    res.write("Welcome to my Application ");
   
    if(req.url == '/product'){
        return res.end("this is product page");
    }else if(req.url == '/user'){
        return res.end("this is user page");
    }
    res.end("welcome to NodeJS Ninjas Server")
});

//Specify a port to listen to client's request
server.listen(3200, ()=>{
    console.log("server is listening on port 3200");
});