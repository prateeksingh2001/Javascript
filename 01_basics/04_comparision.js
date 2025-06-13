// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);  //-> true  They act so differently
// console.log("02" > 1); //-> true  They act so differently

//avoid these kinds of conversions work on clean code
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //false

/*
The reason equality check == and comparision > < >= <= work differently.
Comparisons convert null to a number treating it as 0.
That's why (3) null >= 0 is true amd (1) null > 0 is false.
*/

//avoid these kinds of conversions work on clean code
console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0);

// ===   ->strict check -> It checks value as well as data type

console.log ("2" === 2); //false