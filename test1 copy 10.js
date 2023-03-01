/*
    Z 
    https://www.acmicpc.net/problem/1074
    63
*/

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim();
let input = fs.readFileSync('./input10.txt').toString();
input = input.split(' ');
    let x = 0;
    let y = 0;
    let cnt = 0;

    const Solution = (N,r,c) => {
        console.log(cnt)

        
        for(let i = 0; i<4;i++){
            // console.log(N, i, x, y,(2**N/2-1))
            if(x===r&&y===c) return console.log(r,c)
            if(N>0){
            if(i===0&&(x===0&&y===0)){
                Solution(N-1,r,c)
                    
                
                }
            if(i===0&&!(x===0&&y===0)){
                x-=(2**N/2-1);
                y+=(2**(N-1)/2-1);
                Solution(N-1,r,c)
                }
            if(i===1){
                x-=(2**(N-1)/2-1);
                y+=(2**(N-1)/2-1);
                Solution(N-1,r,c)
                }
            if(i===2){
                x+=(2**(N-1)/2-1);
                y-=(2**N/2-1);
                Solution(N-1,r,c)
                }
            if(i===3){
                x-=(2**(N-1)/2-1);
                y+=(2**(N-1)/2-1);
                Solution(N-1,r,c)
                cnt++     
                }
            }
            // }else if(N===1){
            //     if(i===0&&(x===0&&y===0)){
            //         cnt++                    
            //         }
            //     if(i===0&&!(x===0&&y===0)){
            //         cnt++
            //         x-=(2**N/2-1);
            //         y+=(2**(N-1)/2-1);
            //         Solution(N-1,r,c)
            //         }
            //     if(i===1){
            //         cnt++
            //         x-=(2**(N-1)/2-1);
            //         y+=(2**(N-1)/2-1);
            //         Solution(N-1,r,c)
            //         }
            //     if(i===2){
            //         cnt++
            //         x+=(2**(N-1)/2-1);
            //         y-=(2**N/2-1);
            //         Solution(N-1,r,c)
            //         }
            //     if(i===3){
            //         cnt++
            //         x-=(2**(N-1)/2-1);
            //         y+=(2**(N-1)/2-1);
            //         Solution(N-1,r,c)
            //         }
            // }else
            // {
            //     console.log("there is no answer")
            // }
            }


    }
    Solution(input[0],input[1],input[2])

//1~A 까지의 수
//B개의 세트