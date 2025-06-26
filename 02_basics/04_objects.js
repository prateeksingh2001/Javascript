// const tinderUser = new Object() //Singleton object

const tinderUser = {} //non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser ={
    email: "some@gmail.com".at,
    fullname: {
        userfullname: {
            firstname: "Darren",
            lastname: "Sammy"
        }
    }
}
// console.log(regularUser)
// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname.firstname)

//console.log(regularUser.fullname?.userfullname.firstname)
//? here used for condition if fullname exists then enter and access if not then leave

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = { obj1, obj2 } 
//const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2, ...obj4}
//console.log(obj3)

//objects in Array
const users = [
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 2,
        email: "abcd@gmail.com"
    },
    {
        id: 1,
        email: "abcde@gmail.com"
    }
]

//console.log(users[1].email)

// console.log(tinderUser); //data type is object

// console.log(Object.keys(tinderUser)); // datatype is array
// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')) //true
// console.log(tinderUser.hasOwnProperty('isLogged')) //false

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//console.log(course.courseInstructor);
// const {courseInstructor} = course
// console.log(courseInstructor);

const {courseInstructor: Instructor} = course
console.log(Instructor);

/* In React
const navbar = ({company}) => {    //proprs instead of props.company

}

navbar(company = "hitesh")
*/

// API apna kaam dusre ke sar pe daal dena 
//fetching values 
//Before the vlaues comes in XML format but now they come in json

//JSON in boject form 
// {
//      courseName: "js in hindi",
//     price: "999",
//     courseInstructor: "hitesh"
// }

//some Api are in array too
// [
//     {},
//     {},
//     {}
// ]

//fetch a random ali use json formatter to analyze it and understand it
