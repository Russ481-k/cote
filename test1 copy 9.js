/*
    야구문제
[31,24,14,52,32,34,75,96,54,34] 8
[31,24,25,4,52,12,34,75,96,65,54,34] 6
*/

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim();
let input = fs.readFileSync('./input9.txt').toString();
input = input.split(',');
    const Solution = (arr) => {
        let outCnt=0;
        let score=0;
        let base=[0,0,0];
        let setBase=(i)=>{return +arr[i]%5}
        const hit = (num) => {
            if(num===0)outCnt++
            for(let i = 0 ; i<num ; i++){
                if(base.shift()===1)score++
                if(i===0){
                    base.push(1)
                }else base.push(0)
                console.log(base,outCnt)
            }
        }
        for(let i = 0; i<arr.length;i++){
            if(outCnt===3)return console.log(`3 out game set score : ${score}`)
            hit(setBase(i))
            // console.log(score)
        }
        return console.log(`game set score : ${score}`)
    }
    Solution(input)
//1~A 까지의 수
//B개의 세트