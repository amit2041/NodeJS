// Please don't change the pre-written code
// Import the necessary modules here
const fs = require('fs');

const Solution = () => {
  // Write your code here
  //Creating a file
  try{
    fs.writeFileSync("notes.txt", "The world has enough coders");
  }catch(err){
    console.log(err);
  }

  // To Read the contents of the file.
  let buffer = fs.readFileSync("notes.txt",{encoding: 'utf8'});
  console.log(buffer);

  //Updating a data of that file
  fs.appendFileSync("notes.txt", " BE A CODING NINJA!");

  // To Read the contents of the file.
  buffer = fs.readFileSync("notes.txt",{encoding: 'utf8'});
  console.log(buffer);

};
Solution();
module.exports = Solution;
