//Dates

// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); //object type

// let myCreatedDate = new Date(2023, 0, 23); //month are starting with 0
//let myCreatedDate = new Date(2023, 0, 23, 5, 3);
 

// console.log(myCreatedDate.toString());
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2023-01-14"); // DD/MM/YY month count start with 1
// let myCreatedDate = new Date("08-14-2023"); // MM/DD/YY

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);

let myCreatedDate = new Date("08-14-2023");

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime()); //gettime stamp of specific date
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date(); 
console.log(newDate);
// console.log(newDate.getMonth() + 1); // +1 cause it starts month from 0
// console.log(newDate.getDay());

// console.log(`Today the day is ${newDate.getDay()} and the time is ${newDate.getHours()}`)

newDate.toLocaleString('default',{
    weekday: "long",
})

