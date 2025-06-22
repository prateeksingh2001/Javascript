const name ="Prateek"
const repoCount = 50

//console.log(name + repoCount + " Value") //old way

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`); //New and better way

//String Interpolation - we make placeholders variable is directly injected there

const gameName = new String('prateeksingh')
// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.__proto__.length);
// console.log(gameName.length);

// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2)); //char at 2nd position(index)
// console.log(gameName.indexOf('t')); // index of char

// const newString = gameName.substring(0, 4); 
// console.log(newString);

//const anotherString = gameName.slice(2, 4);
const anotherString = gameName.slice(-12, 3); //To be checked again Chatgpt
console.log(anotherString);

const newString1 = "      Prateek     " ;
console.log(newString1);
console.log(newString1.trim());

const url = "https:/prateek.com/prateek%20singh"

console.log(url.replace('%20', '-'));

console.log(url.includes('sundar'));

console.log(gameName.split('-'));