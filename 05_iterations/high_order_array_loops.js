// for of

//["", "", ""]
//[{}, {}, {}]

//forof
// for (const element of object) { object yahan par js wala object nhi hai object ka matlab hai kiske upar loop lagagna hai
    
// }
// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {          //print elements of arr one by one each in new line
//     console.log(num);
// }


// const greetings = "Hello World"                     
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);      //print char of greetings one by one each in new line
// }

//Maps

const map = new Map()   //map is a object that holds key value pairs remembers original order of insertion
map.set('IN', "India")
map.set('FR', "France")
map.set('ENG', "England")
console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value)
}