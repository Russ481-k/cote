

/*
    https://www.acmicpc.net/problem/11021
1 1
2 3
3 4
9 8
5 2
0 0
*/

var fs = require('fs');
const input = require('fs').readFileSync('./input32.txt').toString().split('\n');
// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let answer = ""
let cnt = input.length-1
while(cnt>0){
    let b = parseInt(input[i].split(' ')[0]);
    let c = parseInt(input[i].split(' ')[1]);
    answer+=(b+c).toString()+"\n"
    cnt--
}
console.log(answer)   
