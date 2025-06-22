// const score = 400
// console.log(score)

// const balance = new Number(100)
// console.log(balance) 

// console.log(balance.toString().length);
// console.log(balance.toFixed(2))

// //const otherNumber = 23.8564  ->23.9
// const otherNumber = 123.8564
// //const otherNumber = 2123.8564
// console.log(otherNumber.toPrecision(3))

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// //min value, max value, is safe integer


/************************Math***************************/

console.log(Math)
console.log(Math.abs(-4)); // Absolute -> converts -ve to +ve

console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.8));

//sqrt(), pow()

console.log(Math.min(4, 3 , 6 , 8))
console.log(Math.max(4, 3 , 6 , 8))

console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.random()*10 + 1);
console.log((Math.random()*10) + 1); // avoiding zero case
console.log(Math.floor(Math.random()*10) + 1);

//imp
const min = 10 
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)