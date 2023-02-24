/*
    https://www.acmicpc.net/problem/2164
6

*/

let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim();
let input = fs.readFileSync('./input5.txt').toString();
input = input.split('\n');



// // 배열 길이 1이 될 때 까지 반복
// for(let i = cards.length ; i > 1 ; i--){
// 	//제일 앞에 있는 값 shift() 

// 	cards.shift()
// 	//제일 앞에 있는 값 shift()하고 push
// 	cards.push(cards.shift())
// }
// console.log(cards[0])
// //첫째 줄에 남게 되는 카드 번호 출력


class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    s_push(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }
        this.tail = newNode;
        this.length++;
        return newNode;
    }
    s_getHead(){
        return this.head.value;
    }
    s_removeHead(){
        this.head = this.head.next;
        this.head.prev = null;
        this.length--;
    }
    s_getSize(){
        return this.length;
    }
}
const Solution = (input) => {
    //배열 선언
    let cards = []
    const list = new LinkedList();

    //배열 안에 입력값 넣음
    for(let i = 1; i <= input[0] ; i++) list.s_push(i)
    for(;;){
        if(list.s_getSize()<=1)break;
        list.s_removeHead();
        list.s_push(list.s_getHead());
        list.s_removeHead();
    }
    console.log(list.s_getHead())
}
Solution(input)