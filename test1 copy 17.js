

/*
    https://www.acmicpc.net/problem/1330
10 2
*/

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString();
let input = fs.readFileSync('./input17.txt').toString();
input = input.split(' ')
    const Solution = (A,B) => {
        if(A>B){
            console.log(">")
        }else if(A<B){
            console.log("<")
        }else{
            console.log("==")
        }
    }
Solution(+input[0],+input[1])
