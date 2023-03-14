

/*
    https://www.acmicpc.net/problem/11021
5

*/

var fs = require('fs');
const input = require('fs').readFileSync('./input33.txt').toString().split('\n');
// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
for (let i = 0; i < input.length ; i++) {
    let numbers = input[i].split(' ')
    
    console.log(Number(numbers[0]) + Number(numbers[1]));
}