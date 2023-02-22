/*
    boj.kr/4344

    0 1 2 2 2 7
*/

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim();
let input = fs.readFileSync('./input.txt').toString();
console.log(input);
input = input.split('/n'); 

let set = [1,1,2,2,2,8]
let arr = input;
for(let i = 0 ; arr.length>=i;i++){
    if(typeof arr[i] === 'number'){
    arr[i] = set[i] - input[i]
    }
}

