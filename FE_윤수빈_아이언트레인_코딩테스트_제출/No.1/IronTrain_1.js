let input = 25;
let resultA = [];
let resultB = [];
let odd = [];
let even = [];

for (let i = 1; i <= input; i++) {
  if (i % 2 === 0) {
    even.push(i);
  } else {
    odd.push(i);
  }
}

for (let i = 0; i < input / 2; i++) {
  even[i] !== undefined
    ? resultA.push([odd[i], even[i]])
    : resultA.push([odd[i]]);
}

while (resultA.length > 0) {
  const randomNum = Math.floor(Math.random() * resultA.length);
  resultB.push(...resultA[randomNum]);
  resultA.splice(randomNum, 1);
}
console.log(resultB);
