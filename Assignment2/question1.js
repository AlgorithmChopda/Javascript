/*
    Declare a variable - let a;. On another line assign any value you like to a. Log the value of a before and after assignment. Try doing the same with const.
    
    Use the typeof operator to find the types of different variables. Specially note what the typeof operator returns for arrays, null values and NaN. How can you find if a variable is an array or NaN besides typeof?
*/


// let 
let a;
console.log(a) // gives undefined
a = 100;
console.log(a)

// const
const b = 200; // const if not initialized gives error
console.log(b)
console.log()

// typeof
console.log("1 :", typeof 1)
console.log(`"1":`, typeof "1")
console.log("null :", typeof null)
console.log("NaN :", typeof NaN)
console.log("[1,2]:", typeof [1,2])
console.log("undefined : ", typeof undefined)
console.log("{} : ", typeof {})
console.log()

//besided type of
let ar = []
console.log("Is ar array : ", Array.isArray(ar))
let temp = NaN
console.log("Is temp NaN : ", isNaN(temp))