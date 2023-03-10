

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
const input = require('fs').readFileSync('./input27.txt').toString().split('\n');
// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let a = parseInt(input[0]);
let b = parseInt(input[1]);
let sum = 0

for(let i = 2 ; i < b+2 ; i++){
    let c = input[i].split(' ')[0]
    let d = input[i].split(' ')[1]
    sum += Number(c)*Number(d);
}
console.log(a===sum&&b+2===input.length?"Yes":"No")
