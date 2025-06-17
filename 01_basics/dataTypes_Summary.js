// Primitive

/* 7 Types : String ,
             Number ,
             Boolean ,
             null -> Empty (Not Zero) ,
             undefined -> Vaiable declared value not entered ,
             Symbol -> Used to make value unique in advanced javascript front end development one component is used in many places some times we have to make it unique so we wrap it in a symbol and it bcmoes unique. ,
             BigInt
*/

//Reference

/* 
        Arrays, Objects, Functions

*/

//const score = 100
//In Js we don't have to define datatype

//In Typescipt
//const score:number = 100

/*
//Primitive
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 1246528461635633n //n represents bigInt

//Reference (Non-Primitive)

const heros = ["shaktiman", "naagraj", "doga"]

const myObj = {
    name: "Prateek",
    age: 23,
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof bigNumber)
console.log(typeof outsideTemp)
console.log(typeof scoreValue)
console.log(typeof myFunction) // object function bola jata hai

*/

/************************************************************/

//Stack Memory -> Primitive  -> value
//Heap Memory -> Non-Primitive  -> reference

let myCollegeName = "LNMIIT"

let anotherName = myCollegeName
anotherName = "LNM Institute of IT"

console.log(anotherName)   //output ->  LNM Institute of IT
console.log(myCollegeName) //output ->  LNMIIT


let userOne = {
    Name: "Prateek",
    Email: "abc@gmail.com"
}
console.log(userOne.Email) //output ->  abc@gmail.com

let userTwo = userOne
userTwo.Email = "qwerty@gmail.com"

console.log(userTwo.Email)  //output -> qwerty@gmail.com
console.log(userOne.Email)  //output -> qwerty@gmail.com