/*
    https://www.acmicpc.net/problem/10430
5 8 4
*/

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim();
let input = fs.readFileSync('./input12.txt').toString();
input = input.split(' ');

    const Solution = (A,B,C) => {
        
        console.log((A+B)%C);
        console.log(((A%C) + (B%C))%C );
        console.log((A*B)%C);
        console.log(((A%C) * (B%C))%C);
    }
    Solution(Number(input[0]),Number(input[1]),Number(input[2]))
