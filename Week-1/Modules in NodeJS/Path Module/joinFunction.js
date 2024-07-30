//Import fs Module
const fs = require('fs');
//Import Path Module
const path = require('path');

//Reading data

const filePath = path.join('src', 'home', 'data.txt');
console.log(filePath);

fs.readFile(filePath, (err, data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
});
