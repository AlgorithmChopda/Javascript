// PART 1

/*
    1. What happens when you add a for loop/while loop/switch case block inside a function and use return instead of break? Do statements after the loop run? What is the return value? Can we pass a return value from within a loop? Can you return from inside an if block? What impact does that have?

    ANSWERS:

    1. What happens when you add a for loop/while loop/switch case block inside a function and use return instead of break?
        - when return is used the flow of execution goes to parent function i.e it returns to caller function
    
    2. Do statements after the loop run?
        - NO
    
    3. What is the return value?
        - any type of return value can be provided or empty return can also be there
    
    4. Can we pass a return value from within a loop?
        - Yes, we can pass the return value
    
    5. Can you return from inside an if block? What impact does that have?
        - Yes, it makes the same impact i.e flow moves to caller(parent) function
*/


// PART 2
/*
    2. Take a function that accepts a function as a parameter (also known as callback function). 
    function test(callback){
    callback();
    }

    function callbackFunc(){
    console.log(“Calling the callback function”)
    return 5;
    }
    
    Explore the following cases - what is printed in the console, and what gets returned:

    test(callbackFunc)
    test(callbackFunc())
    test(() => callbackFunc())

    What happens when you return callback() from the test function?
    What happens when you return callback from the test function?

    ANSWER:

    Case 1: test(callbackFunc)
            - in this, the callbackFunc is passed as an argument(callback) to test and test executes it
            - output: Calling the callback function
    
    Case 2: test(callbackFunc())
            - this gives error
            - as function is not passed but it is called(invoked) there only and 5 is passed to test 
            - when test runs callback it gives error as 5 cannot be executed
            - outpu: error
    
    Case 3: test(() => callbackFunc())
            - in this an arrow function is passed as callback to test function, the arrow function itself runs the 
              callbackFunc()
            - output: Calling the callback function

    
    1.What happens when you return callback() from the test function?
        - this will execute the callback function at return statement only
        - ans as 5 is returned, the function returns 5
    
    2.What happens when you return callback from the test function?
        - this will return the funciton without executing it
*/