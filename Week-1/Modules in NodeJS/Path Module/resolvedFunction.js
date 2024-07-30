//Import fs Module
const fs = require('fs');
//Import Path Module
const path = require('path');

//Reading data

const fileResolvedPath = path.resolve('src', 'home', 'data.txt');
console.log(fileResolvedPath);

fs.readFile(fileResolvedPath, (err, data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
});
