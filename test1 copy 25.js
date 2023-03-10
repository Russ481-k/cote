

/*
    https://www.acmicpc.net/problem/10950
5
1 1
2 3
3 4
9 8
5 2
*/

var fs = require('fs');
const input = require('fs').readFileSync('./input25.txt').toString().split('\n');
// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let a = parseInt(input[0]);

for(let i = 1 ; i <= a ; i++){
    let arr =  input[i].split(' ')

    console.log(Number(arr[0]) + Number(arr[1]))
}