/*
    https://www.acmicpc.net/problem/2588
472
385
*/

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString();
let input = fs.readFileSync('./input13.txt').toString();
input = input.split('\n');

    const Solution = (A,B) => {
        for(let i = B.length-1; i>=0;i--){
            console.log(B.split('')[i]*A);
        }
        console.log(A*B);
    }
    Solution(input[0], input[1])
