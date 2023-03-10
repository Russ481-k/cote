

/*
    https://www.acmicpc.net/problem/2480
3 3 6
1300
*/

var fs = require('fs');
const input = require('fs').readFileSync('./input24.txt').toString().split(' ');
// const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let a = parseInt(input[0]);

for(let i = 1 ; i < 10 ; i++){
    console.log(`${a} * ${i} = ${i*a}`)
}