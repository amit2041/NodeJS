//call arithmetic function, get result and print result on terminal

//how to import a module
const arithmeticModule = require('./arithmetic');
//By Anonymous function
console.log(arithmeticModule.sum(5,6)); // here sum is Object
console.log(arithmeticModule.division(30,6)); // here division is Object because it's anonymous function

/*//By simple function
console.log(arithmeticModule.sum(5,6));
console.log(arithmeticModule.div(30,6));

//or second way to console.log
console.log(arithmeticModule.add(8,6));
console.log(arithmeticModule.division(18,6)); */