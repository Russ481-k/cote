/*
    boj.kr/9012
6
(())())
(((()())()
(()())((()))
((()()(()))(((())))()
()()()()(()()())()
(()((())()(
*/

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim();
let input = fs.readFileSync('./input.txt').toString();
input = input.split('\n');
	//배열 선언
	let ps = [];
    //입력 값의 길이 만큼 반복
    for(let i = 1 ; i<=input[0] ; i++){
        let test = input[i].split('')
        for(let j = 0 ; j<test.length ; j++){
            //괄호 open >> push
            if(test[j] === '(') ps.push(1);            
            //배열 내 괄호 open이 있을 경우 괄호 close >> pop
            else if(test[j] === ')' && ps.length!==0&&ps[0]!==-1) ps.pop();
            //배열 내 괄호 open이 없을 경우 false
            else {ps.push(-1);}
        }
    //배열이 비어있을 경우 YES
    if(ps.length===0) console.log('YES') ;
    //배열 안에 1이 남아있을 경우 NO
    else  console.log('NO') ;
    ps = []
}
