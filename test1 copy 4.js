
var fs = require('fs');
let input = fs.readFileSync('./input.txt').toString();
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a/b);