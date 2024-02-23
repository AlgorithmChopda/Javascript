// 5. What will be printed to the console?

const testAsyncFunction = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Test Resolve");
    } else {
      reject("Test Reject");
    }
  }).catch((err) => {
    console.log("Error caught in testAsyncFunction", err);
    // error for above promise is catched and again error is thrown to caller function
    throw new Error("Forced error");
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
        - when promise is rejected the ".catch" inside the testAsyncFunction will run and at end we are again throwing new error
        from catch that will be handled in outer catch

    output: Error caught in testAsyncFunction: Test Reject
            Error in catch block:  Error: Forced error

*/
