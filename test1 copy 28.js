

/*
    https://www.acmicpc.net/problem/25304
260000
4
20000 5
30000 2
10000 6
5000 8
*/

var fs = require('fs');
const input = require('fs').readFileSync('./input28.txt').toString().split('\n');
// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let a = parseInt(input[0]);
let answer = "int"
for(let i = 1 ; i <= a/4 ; i++){
    answer = "long " + answer
}
console.log(answer)