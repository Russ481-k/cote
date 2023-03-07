/*
    https://www.acmicpc.net/problem/2588
472
385
*/

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString();
let input = fs.readFileSync('./input14.txt').toString();
input = input.split(' ');

    const Solution = (A,B,C) => {

        console.log(A+B+C);
    }
    Solution(+input[0], +input[1], +input[2])
