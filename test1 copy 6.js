/*
    https://www.acmicpc.net/problem/1629
10 11 12

*/

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim();
let input = fs.readFileSync('./input6.txt').toString();
input = input.split(' ');
    let X=0;
    const Solution = (A,B,C) => {
        if(B<1) {
        X = A*A%C
        Solution(X,B-1,C)
    }else{
        return console.log(X)
    }
        
    }
    Solution(+input[0],+input[1],+input[2])
    //4
    //A를 B번 곱한 수 
    //A^(B/2)*A^(B/2)/C=X