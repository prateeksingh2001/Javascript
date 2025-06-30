const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);   //this -> here refers to current context
        console.log(this);

    }
}

// user.welcomeMessage() //hitesh, welcome to website
// user.username = "Sam" // here we have chabged the context (values) we are able to do do that beacuse we have not hardcoded them before and till above line the context was same. Context -> matlab kiske baare mein baat ho rhi hai


// user.welcomeMessage() //Sam, welcome to website

console.log(this); //returns empty object {} in node environment but in console it shows global object (window object)

// function chai(){
//     console.log(this);
// }

// chai() // shows a global object

// function chai(){
//     let username = "Prateek"
//     console.log(this.username); //output -> undefined -> can't use this here in these functions not able to access username
// }                                        

// chai() // shows a global object



//Arrow functions
// const chai = () => {
//     let username = "Prateek"
//     // console.log(this.username);
//     console.log(this);
// }
// chai()

// const addTwo = (num1, nums2) => {
//     return num1 + nums2;
// }

// const addTwo = (num1, nums2) => num1 + nums2; //-> implicit return

// const addTwo = (num1, nums2) => (num1 + nums2); //agar culy braces {} use kiya toh return keyword use karna hi padega , agar parenthesis use kiya toh return keyword use karne ki zarurat nhi hai

// console.log(addTwo(3,4))

const addTwo = (num1,num2) => ({username: "Prateek"}) //way to return an object

console.log(addTwo());

// const myArray = [2, 5, 3, 7, 8];

// myArray.forEach() =>