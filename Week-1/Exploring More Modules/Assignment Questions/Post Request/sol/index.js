// Please do not change the prewritten code

import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  if(req.method == 'POST'){
    //Expected data from Clients
    let body = '';
    req.on('data', (chunk)=>{
      body+= chunk.toString();
    });
    
    req.on('end', ()=>{
      fs.appendFileSync('data.txt', body + '\n');

      // Read and print the new content of the text file to the console
      const fileContent = fs.readFileSync('data.txt', 'utf8');
      console.log(fileContent);
      res.end("data received");
});
  }else{
    res.end("data is not received");
  }
});

export default server;
