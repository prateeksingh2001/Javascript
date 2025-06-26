
// if(true){
//     let a = 10;
//     const b = 30
//     var c = 40
//     d = 50
// }

// console.log(a) // error
// console.log(b) // error
// console.log(c) // 40
// console.log(d) // 50

// inside {}-> block scope
// outside -> global scope
//     var c = 500
// let a = 425;
//     const b = 745
// if(true){
//     let a = 10;
//     const b = 30
//     var c = 40
//     d = 50
//     console.log(a) 
//  console.log(b) 
// console.log(c) 
//  console.log(d)
// }

// console.log(a) 
//  console.log(b) 
// console.log(c) 

//nested function

function one(){
    const username = "Prateek"
    function two(){
        const website = "Google"
        console.log(username)
    }
    //console.log(website); -> error out of scope
    two()
}
//one()

if(true) {
    const username = "Prateek"
    if (username === "Prateek"){
        const website = " Google"
        //console.log(username + website)
    }
    // console.log(website) -> Error
}
// console.log(username) -> Error



// ++++++++++++++++++Interesting+++++++++++++++
//mini hoisting

console.log(addOne(5))  //6
function addOne(num){
    return num + 1
}
console.log(addOne(5)) //6

// console.log(addTwo(8)) -> Error cannot call before initialization
const addTwo = function(num){
    return num + 2;
}
console.log(addTwo(8))