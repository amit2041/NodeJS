//Import fs module

const fs = require('fs');

try{
    fs.writeFileSync("employee.txt", "Name: David Doe, Age: 40, Position: Manager");
} catch(err){
    console.log(err);
}
try{
    fs.writeFileSync("Details.txt", "This is a new company");
} catch(err){
    console.log(err);
}

//Updating a empolyee.txt file data by using Append
fs.appendFileSync("employee.txt", " ,Name: Dwayne Johnson, Age: 45, Position: COO");

//deleting a file by using unlinkSync

try{
    fs.unlinkSync("Details.txt");
} catch(err){
    console.log("File doesn't exist");
}


console.log("this is another file being performed");