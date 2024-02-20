/*
    1. Write a function that can stop execution of a function for the number of milliseconds sent as an argument
    
    Example:
        const func = async () => {
            console.log(“Printing before”)
            Call your function here eg. sleep(3000)
            console.log(“Printing after”)
        }
*/

function sleep(time) {
  return new Promise((res) => {
    // reesolve the timer after expected time
    setTimeout(() => {
      res();
    }, time);
  });
}

const func = async () => {
  console.log("Printing before");
  await sleep(3000);
  console.log("Printing after");
};

func();
