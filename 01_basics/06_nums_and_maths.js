const score = 400
console.log(score); // 400

const balance = new Number(100)
console.log(balance); // [Number:100]

console.log(balance.toString()); // 100
console.log(balance.toString().length); // 3
console.log(balance.toFixed(1)); // 100.0

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3)); //124

const hundreds = 1000000
console.log(hundreds.toLocaleString("en-IN")); //10,00,000

//+++++++++++++++++++++Maths+++++++++++++++++++++++++++++++

console.log(Math); // object [Math] {}
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.6));// 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.min(4,3,6,8)); //3
console.log(Math.max(4,3,6,8)); //8

console.log(Math.random()); // any radom value from 0 to 1  ,0.28120305240840904

console.log(Math.random()*10+1); // 4.216954041804032

console.log((Math.random()*10)+1); // 5.676639110493401

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min) // 15 any random value between 11 to 20

