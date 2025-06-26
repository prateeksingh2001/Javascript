// function sayMyName(){
//     console.log("Prateek")
// console.log("Pratap")
// console.log("Singh")
// }

// sayMyName()

// function addTwoNumbers(num1, num2){      //parametes(a, b)
//     console.log(num1 + num2);
// }

// addTwoNumbers(3, 4)    //Arguments(a,b)
// addTwoNumbers(3, "4")
// addTwoNumbers(3, null)

// const res = addTwoNumbers(3,5);
// console.log("Result: ", res);

function addTwoNumbers(num1, num2){
    // let res = num1 + num2;
    // return res
    return num1 + num2;
    //console.log("Prateek") -v will notbe printed as it isafter return
}

// const res = addTwoNumbers(3,5);
// console.log("Result: ", res);

// function loginUserMessage(username){
//     return `${username} just logged In`
// }

// console.log(loginUserMessage("Prateek"))
// console.log(loginUserMessage(""))
// console.log(loginUserMessage())

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please Enter a Username");
//         return
//     }
//     return `${username} just logged In`
// }

// console.log(loginUserMessage("Prateek"))
// console.log(loginUserMessage(""))
// console.log(loginUserMessage())

// undefined -> false
// "" -> false
//! -> Not

// function loginUserMessage(username){
//     if(!username){
//         console.log("Please Enter a Username");
//         return
//     }
//     return `${username} just logged In`
// }

// console.log(loginUserMessage())

// function loginUserMessage(username = "Sam"){ //passed deafault value
//     if(!username){
//         console.log("Please Enter a Username");
//         return
//     }
//     return `${username} just logged In`
// }

// console.log(loginUserMessage())

// function calculateCartPrice(...num1){   //rest operator
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500, 2000)) // all these values will go into in array becuase we have used rest operator otherwise we would get only first value. now we have get all these values in an array we will access it later using loops

function calculateCartPrice(val1, val2, ...num1){   //val 1 wiil take 200 , val 2 = 500 and rest in num1 as an array
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))  //output -> [500, 2000]
 
// objects functions

// const user = {
//     username: "hitesh",
//     price: 199
// }


function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);
handleObject({
    username: "sam",
    price:399
})

// const myNewArrray = [200, 400, 600, 500];

function returnSecondValue(getArray){
    return getArray[1];
}

//console.log(returnSecondValue(myNewArrray));
console.log(returnSecondValue([200, 400, 600, 500]))