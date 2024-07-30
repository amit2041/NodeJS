//by Anonymous function, below we also created Object like- sum , division because anonymous function is also created Objects


//module.exports.sum = (x, y) => { //here we can remove module. and this exports is also working
exports.sum = (x, y) => {  
return x + y;
};
module.exports.division = (x, y) => {
  return x / y;
};
console.log("Loading Arithmetic");
/*//by simple function
function sum(x, y){
    return x+y;
};

function div(x,y){
    return x/y;
};

module.exports = {
    sum,
    div,
};*/
/*// or second way to export
module.exports = {
    add: sum,
    division: div,
};*/
