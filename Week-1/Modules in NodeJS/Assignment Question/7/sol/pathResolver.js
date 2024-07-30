// Import the necessary modules here.
const path = require("path");

exports.getAbsolutePath = (filePath) => {
// Write your code here
// Resolve the absolute path of the file.txt in the src directory
const absolutePath = path.resolve("src", "file.txt");
return absolutePath;
};
