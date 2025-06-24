//array


// const myArr = [0, 1, 2, 3, 4, 5, "Prateek", true] //Valid
const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Spiderman", "Hulk"]

// console.log(myArr[0]); //0 index

//copy operations in js create shallow copies(pass by reference) rather than deep copies (pass by value)

const myArr2 = new Array(1, 2, 3, 4)

//Array Methods
// myArr.push(6)
// myArr.push(7)
// console.log(myArr)

// myArr.pop()
// console.log(myArr)

// myArr.unshift(9) //enter at start and shifts all the elem which is costly
// console.log(myArr)

// myArr.shift() // remove first elem by shifting
// console.log(myArr)

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(2))
// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr)

// console.log(typeof(myArr));
// console.log(typeof(newArr));

//slice, splice

console.log("A ", myArr)

const myn1 = myArr.slice(1,3)
console.log(myn1)

console.log("B ", myArr)

const myn2 = myArr.splice(1,3)
console.log(myn1)

console.log("C ", myArr)
