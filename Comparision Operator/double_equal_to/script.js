var a = 10;
var b = 11;

console.log(a < b);
console.log(b < a);

var s =  10
var f = "10"

console.log(s == f); // implicit type casting provide "true"
console.log(s === f);// It was too strict

console.log(s === parseInt(f)); //parseInt is use in Explicit Type casting 