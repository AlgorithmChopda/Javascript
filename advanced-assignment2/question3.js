/* 
    Share minimum four differentiation between regular function and arrow functions with one examples
*/
/*
    Answer:
    1. arrow function doesnt have access to this keyword
    2. a constructor cannot be an arrow function
    3. arrow functions cannot be accessed before initialization
    4. arrow function cannot be used as an generator function
    5. apply and bind are not on arrow functions
*/

function normalFunc() {
  console.log("in normal function");
}

const arrowFunc = () => {
  console.log("in arrow function");
};

normalFunc();
arrowFunc();
