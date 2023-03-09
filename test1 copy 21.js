

/*
    https://www.acmicpc.net/problem/2884
12
5
*/

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString();
const [A, B] = fs.readFileSync('./input21.txt').toString().trim().split(' ').map(Number);

let hour = 0;
let minute = 0;
if(B<45) {
    minute = 60 + B - 45;
    A>0 ? hour = A - 1 : hour = 24 - 1;
}else {
    hour = A;
    minute = B - 45;
}
console.log(hour, minute);