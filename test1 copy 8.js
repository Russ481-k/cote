/*
    https://www.acmicpc.net/problem/1074
3 1
*/

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim();
let input = fs.readFileSync('./input8.txt').toString();
input = input.split(' ');

        //let cnt = 0
        //let i = 0
        //let j = 0
    const Solution = (N,r,c) => {
        if(2^N/2===1){
            //1
            //2
            //3
            //4
            return
        }
        Solution(2^N/2,r,c)
        
        //[0][2^N/2]
        //

    }
    Solution(+input[0],+input[1],+input[2])


//1~A 까지의 수
//B개의 세트