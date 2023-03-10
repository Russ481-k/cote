

/*
    https://www.acmicpc.net/problem/8393
3
*/

var fs = require('fs');
const input = require('fs').readFileSync('./input26.txt').toString().split('\n');
// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let a = parseInt(input[0]);
let add = 0
for(let i = 1 ; i <= a ; i++){
    add += i
}
console.log(add)