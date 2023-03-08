

/*
    https://www.acmicpc.net/problem/9498
100
*/

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString();
let input = fs.readFileSync('./input18.txt').toString();
input = input.split(' ')
    const Solution = (A) => {
        if(A<=100&&A>=90)console.log("A") 
        else if(A<=89&&A>=80)console.log("B") 
        else if(A<=79&&A>=70)console.log("C") 
        else if(A<=69&&A>=60)console.log("D") 
        else console.log("F")
    }
Solution(+input[0])
