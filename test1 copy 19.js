

/*
    https://www.acmicpc.net/problem/2753
2000
*/

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString();
let input = fs.readFileSync('./input19.txt').toString();
input = input.split(' ')
    const Solution = (A) => {
        console.log(A,A%4,A%100,A%400)
        if((A%4===0&&A%100!==0)||A%400===0)console.log(1) 
        else console.log(0)
    }
Solution(+input[0])
