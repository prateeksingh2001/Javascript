// Immediately Invoked Function Expressions (IIFE)

// function chai(){               //Normal 
//     console.log(`DB connected`)
// }  
// chai()

//IIFE

(function chai(){               
    console.log(`DB connected`)
}) (); //here applying ';' is necessary otherwise next function will give an error

// ()() -> 1st parenthesis defination and 2nd parenthesis is execution call

//IIFE - the function which executes immediately
// global scope ke pollution se problem hoti hai kai baar uske valriables ya jo bhi pollution hai usko hatane ke ke liye ham iife ka use karte hein

// ( () => {
//     console.log(`DB connected 2`);   
// } )()  ;

// (function chai() {
//     console.log(`DB connected 2`);  
// } )();

//Named IIFE
( (name) => {
    console.log(`DB connected 2 ${name}`);   
} )(`Prateek`)  ;