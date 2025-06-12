//Declsrstion of variables
const accID = 142563 //Contant value cannot be changed
let accEmail = "abc12345@gmail.com"
var accPass = "12345"
accCity = "Jaipur" //Auto declared by js(or memory reserve)
let accState; //undefined
//accID = 2 ->not allowed

accEmail = "qwerty@gmail.com"
accPass = "24252425"
accCity = "Bengaluru"

console.log(accID);

console.table([accID, accEmail, accPass, accCity, accState]);

/*
Prefer ot to use var
beacuse of issue in block scope
*/