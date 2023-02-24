/*
    https://www.acmicpc.net/problem/15649
3 1
*/

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim();
let input = fs.readFileSync('./input7.txt').toString();
input = input.split(' ');
    let cnt=1;

    const Solution = (A,B) => {
        let cnt = 0
        let arr = [];
        let answer = []
        for(let i = 1 ; i<B ; i++){
            arr.push([])
            console.log(arr)
            if(arr[i-1]!==i){
                answer.push(i)
            }
            console.log(A,...answer)

        }

        cnt++
        // return Solution(cnt,B)
        
        // let a = 1;
        // let b = 1;
        // //B만큼 숫자가 우측에 추가
        // if(b<=B){
        //     arr.push()
        //     b++
        // }else{ b = 1 }
        // //A만큼 숫자가 하단에 추가
        // if(a<=A){
        //     a++
        // }else{ return }
    }
    Solution(+input[0],+input[1])
//1
//2
//3

//1~A 까지의 수
//B개의 세트