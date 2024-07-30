// Please do not change the prewritten code

const fs = require("fs");

const Solution = () => {
  fs.appendFile("note.txt", "new data", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("data updated successfully");

      // Reading the file after appending the new data
  fs.readFile("note.txt", "utf-8", (err, data) => {
    if (err){
      console.log(err);
    } else{console.log(data);
    }
  });
    }
  });
};
Solution();
module.exports = Solution;
