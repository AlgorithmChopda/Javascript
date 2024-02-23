/*
    Advanced Javascript Assignment 1 
        Create a memoised function that returns the cached value when the same arguments are passed.
*/

// function to return sum from start to end with given function
function getRangeSum(start, end, interval = 1) {
  // [ heavy calculation function ]
  let sum = 0;
  while (start <= end) {
    sum += start;
    start += interval;
  }

  return sum;
}

// memo function that caches the arguments
function memoFunc(callbackFunc) {
  let memo = new Map();

  // accept any no of argument
  return (...args) => {
    argsStr = JSON.stringify(...args);

    if (!memo.has(argsStr)) {
      console.log("function called with new args");
      const result = callbackFunc(...args);

      // memoize the result
      memo.set(argsStr, result);
    }

    return memo.get(argsStr);
  };
}

let rangeCallMemo = memoFunc(getRangeSum);

let sum = rangeCallMemo(1, 10, 2);
console.log("Sum:", sum);

sum = rangeCallMemo(1, 10, 2);
console.log("Sum:", sum);

sum = rangeCallMemo(5, 10, 2);
console.log("Sum:", sum);

/*
  Sum: 25
  Sum: 25
  function called with new args
  Sum: 21
*/
