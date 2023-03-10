

/*
    https://www.acmicpc.net/problem/2480
3 3 6
1300
*/

var fs = require('fs');
const input = require('fs').readFileSync('./input23.txt').toString().split(' ');
// const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = parseInt(input[2]);
let arr = []
if(a === b) arr.push(a)
if(b === c) arr.push(b)
if(a === c) arr.push(c)
// 1에서부터 6까지의 눈을 가진 3개의 주사위를 던져서 다음과 같은 규칙에 따라 상금을 받는 게임이 있다. 
// 같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다. 
if(arr.length === 3)  console.log(10000 + (arr[0] * 1000))
// 같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다. 
if(arr.length === 1)  console.log(1000 + (arr[0] * 100))
// 모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다. 
if(arr.length === 0)  console.log((Math.max(a,b,c)*100))
// 예를 들어, 3개의 눈 3, 3, 6이 주어지면 상금은 1,000+3×100으로 계산되어 1,300원을 받게 된다. 또 3개의 눈이 2, 2, 2로 주어지면 10,000+2×1,000 으로 계산되어 12,000원을 받게 된다. 3개의 눈이 6, 2, 5로 주어지면 그중 가장 큰 값이 6이므로 6×100으로 계산되어 600원을 상금으로 받게 된다.

// 3개 주사위의 나온 눈이 주어질 때, 상금을 계산하는 프로그램을 작성 하시오.