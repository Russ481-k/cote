

/*
    https://www.acmicpc.net/problem/14681
12
5
*/

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString();
const [A, B] = fs.readFileSync('./input20.txt').toString().trim().split('\n').map(Number);

if(A > 0) B > 0 ? console.log(1) : console.log(4)
if(A < 0) B > 0 ? console.log(2) : console.log(3)
