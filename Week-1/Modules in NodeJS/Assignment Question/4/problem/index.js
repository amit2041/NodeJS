// Import required module
const readline = require('readline');

const Solution = () => {
  // Write your code here
  const qInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  //prompt the user for the first number
  qInterface.question("Enter the first number: ", (input1)=>{
    qInterface.question("Enter the second number: ", (input2)=>{
      //Calculate the maximum of the two numbers
      const max = Math.max(Number(input1), Number(input2));
      // Log the maximum value to the console
      console.log(max);
      // close the interface
      qInterface.close();
    });
  });
};

Solution();
module.exports = Solution;
