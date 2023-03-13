

/*
    https://www.acmicpc.net/problem/11021
5
1 1
2 3
3 4
9 8
5 2
*/

var fs = require('fs');
const input = require('fs').readFileSync('./input30.txt').toString().split('\n');
// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let a = parseInt(input[0]);
let answer = ""
for(let i = 1 ; i <= a ; i++){
    let b = parseInt(input[i].split(' ')[0]);
    let c = parseInt(input[i].split(' ')[1]);
    answer+= `Case #${i}: ${b} + ${c} = ${b+c}` + "\n"
}
console.log(answer)   
