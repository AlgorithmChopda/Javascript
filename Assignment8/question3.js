//  3. What will be printed to the console when the promise resolves and when it rejects?

const testAsyncFunction = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Test Resolve");
    } else {
      reject("Test Reject");
    }
  }).catch((err) => {
    console.log("Error caught in testAsyncFunction: ", err);
  });
};

testAsyncFunction()
  .then((res) => {
    console.log("Response in then block: ", res);
  })
  .catch((err) => console.log("Error in catch block: ", err));

/*
    Answer:

    State: Fulfilled
        - when promise is resolved the ".then" will execute    
        output: Response in then block: Test Resolve
    
    State: Rejected
        - when promise is rejected the ".catch" inside the testAsyncFunction will run and once the error is handled
        in catch it will return undefined from the function as 
        - and the outer then will execute

        output: Error caught in testAsyncFunction: Test Reject
                Response in then block: undefined
*/
