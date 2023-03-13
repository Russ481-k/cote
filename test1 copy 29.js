

/*
    https://www.acmicpc.net/problem/15552
5
1 1
12 34
5 500
40 60
1000 1000
*/

var fs = require('fs');
const input = require('fs').readFileSync('./input29.txt').toString().split('\n');
// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let a = parseInt(input[0]);
let answer = ""
for(let i = 1 ; i <= a ; i++){
    let b = parseInt(input[i].split(' ')[0]);
    let c = parseInt(input[i].split(' ')[1]);
    answer+=(b+c).toString()+"\n"
}
console.log(answer)   

// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let answer = '';
// rl.on('line', line => {
//   const input = line.split(' ');
    
//   if(input.length === 2) {
//     const A = parseInt(input[0]);
//     const B = parseInt(input[1]);
//     answer += A+B + '\n';
//   }
// }).on('close', () => {
//   console.log(answer);
//   process.exit();
// })