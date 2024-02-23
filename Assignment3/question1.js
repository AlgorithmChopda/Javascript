/*
    1. Declare a variable let age = 25;. Write a series of if else statements that will:
    Print child to the console if age is less than equal to 12.
    Print teen to the console if age is between 13 and 18 (inclusive).
    Print adult to the console if age is above 18

    2.  Do the same using switch case.
    3. Declare a variable let arraySize = 25;. Using a for loop, add numbers from one onwards into an array till the arraySize is reached.
    4. Accomplish the same using a while loop.
    5. Can you use return instead of break in loops?
*/

// part 1
let age = 5;
if (age <= 12) {
  console.log("child");
} else if (age >= 13 && age <= 18) {
  console.log("teen");
} else {
  console.log("adult");
}

//part 2
switch (true) {
  case age <= 12:
    console.log("child");
    break;
  case age >= 13 && age <= 18:
    console.log("teen");
    break;
  default:
    console.log("adult");
}

//part 3
let ar = [],
  arraySize = 25;
for (let i = 1; i <= arraySize; i++) {
  ar.push(i);
}
console.log("for loop");
console.log("Ar :", ar);

//part 4
let ar1 = [],
  arraySize1 = 25,
  i = 1;
while (i++ <= arraySize1) {
  ar1.push(i);
}
console.log("while loop");
console.log("Ar :", ar);

//part 5
// 5. Can you use return instead of break in loops?
// - yes, we can use break in loop but that will directly return from the function

/*
    function temp() {
        for(...) {
            return // directly to caller (parent) function
        }
    }
*/
