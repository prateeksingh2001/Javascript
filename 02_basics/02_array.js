const marvelHeroes = ["Thor", "Ironman", "Spiderman"]
const dcHeroes = ["Superman", "Flash", "Batman"]

// marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes) //creates array inside array
// console.log(marvelHeroes[2])
// console.log(marvelHeroes[3]) // Array dcHeroes
// console.log(marvelHeroes[3][1]) //Flash

//push works on existing array 
//concat returns a new Array

// const allHeroes = marvelHeroes.concat(dcHeroes)
// console.log(allHeroes) //Make a complete array of both
// console.log(allHeroes[3])

//spread operator
// const allHeroes = [...marvelHeroes, ...dcHeroes]
// console.log(allHeroes) //complete array

// const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// console.log(anotherArray)
// const real_anotherArray = anotherArray.flat(Infinity) // we have to provide depth if we write infinity here it will calculate the depthautomatically
// console.log(real_anotherArray)

console.log(Array.isArray("Prateek"))
console.log(Array.from("Prateek")) //convert to array

//interesting
console.log(Array.from({name: "Prateek"})) //Empty array [] , not able to convert it to array directly so it returns empty array , we have provide initially from whom we want to create the array key, value 

let score1 = 100
let score2 = 200
let score3 = 400

console.log(Array.of(score1, score2, score3));