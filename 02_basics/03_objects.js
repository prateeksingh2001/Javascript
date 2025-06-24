// singleton - created by constructor 
//Object.create

//object literals (not by constructor)

const mySym = Symbol("Key1")

const jsUser = {
    name: "Prateek",
    "full name": "Prateek Pratap Singh",
    //mySym: "myKey1", -> not correct way it takes value as string not symbol
    [mySym]: "myKey1",
    age: 23,
    location: "Jaipur",
    email: "prateek@gmail.com",
    isLoggedIn:  false,
    lastLogInDays: ["Monday", "Tuesday"]
}


// //console.log(jsUser.email)
// console.log(jsUser["email"]) //better way
// console.log(jsUser["full name"]) //only way

// console.log(jsUser.mySym) //not using as a symbol till now
// console.log(typeof(jsUser.mySym)) //string 

// console.log(jsUser[mySym])
// console.log(typeof(jsUser[mySym]))

// jsUser.email = "prateek123@gmail.com" //change in email
// console.log(jsUser["email"])

// Object.freeze(jsUser); // no changes will happen after this

// jsUser.email = "prateek123@gmail.com" 
// console.log(jsUser["email"]) // No chnages will be done

// In js functions are treated as variables no discrimination or differnce

jsUser.greeting = function(){
    console.log("Hello JavaScript User")
}

console.log(jsUser.greeting); //[function (anomynous)]

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`) //to check what properties present int the object we are refeering to
}

console.log(jsUser.greeting());//Hello JavaScript User
                              //undefined
console.log(jsUser.greetingTwo()); // Hello JS user, Prateek
                                // undefined