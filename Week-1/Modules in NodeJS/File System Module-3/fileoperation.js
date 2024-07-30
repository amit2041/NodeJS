const { error } = require('console');
const fs = require('fs');

// to read content of the file
 fs.readFile("data.txt", (err, data)=>{ //if file name or file path not exist then showing error
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
 });

 //Write a New File
 fs.writeFile("employee.txt", "New Employee", (err)=>{ //if any error in this file creation
    if(err){
        console.log(err);
    }else{
        console.log("File is written");
    }
 })

 //Update data

 fs.appendFile("employee.txt", "\nAnother Employee", (err)=>{ // if file path or file name not correct then showing error
    if(err){
        console.log(err);
    }else{
        console.log("File is updated");
    }
 });

 // Delete file

 fs.unlink("employee.txt", (err)=>{ // if file name or file path is not correct then showing error
    if(err){
        console.log(err);
    }else{
        console.log("File is deleted");
    }
    
 })

 console.log('This is another operation being performed');