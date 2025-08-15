const myNumbers = [1,2,3,4,5,6,7,8,9,10]

//map - callback function returns value 
//yahan par filter ki tarah esa nhi hoga ki only true will return
let newNums = myNumbers.map( (num) => num + 10)

newNums = myNumbers.map( (num) => {
    return num * 10
})

//chaining
newNums = myNumbers.map((num) => num * 10).map((num) => num + 1).filter((num) => num >= 40)
console.log(newNums)