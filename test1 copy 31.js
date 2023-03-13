

/*
    https://www.acmicpc.net/problem/11021
5

*/

var fs = require('fs');
const input = require('fs').readFileSync('./input31.txt').toString().split('\n');
// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let a = parseInt(input[0]);
let arr =[];
for(let i = 0 ; i < a ; i++){
    arr.push(" "); 
}
for(let j = 1 ; j <= a ; j++){
    arr.shift();
    arr.push("*");
    console.log(arr.join(""))   
}
 
