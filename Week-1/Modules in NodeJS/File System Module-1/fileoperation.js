// Import fs module
const { isUtf8 } = require('buffer');
const fs = require('fs');
const { encode } = require('punycode');

// to read file content using blocking code

//const buffer = fs.readFileSync('data.txt'); // without encoding

const buffer = fs.readFileSync('data.txt', {encoding: 'utf8'});

// console.log(buffer.toString()); // when we are not using encoding

console.log(buffer);

console.log('this is another operation to being performed');