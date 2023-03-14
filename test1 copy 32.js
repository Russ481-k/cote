

/*
    https://www.acmicpc.net/problem/11021
1 1
2 3
3 4
9 8
5 2
2 3
3 4
9 8
5 2
0 0
*/


const input = require('fs').readFileSync('./input32.txt').toString().trim().split('\n');

for (let i = 0; i < input.length - 1; i++) {
    let numbers = input[i].split(' ').map(v => v * 1);
    
    console.log(numbers[0] + numbers[1]);
}