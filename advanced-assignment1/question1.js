/*
    Advanced Javascript Assignment 1 
        Create a memoised function that returns the cached value when the same arguments are passed.
*/

function getRangeSum(start, end, interval = 1) {
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

  return (...args) => {
    argsStr = JSON.stringify(...args);

    if (!memo.has(argsStr)) {
      console.log("function called with new args");
      const result = callbackFunc(...args);
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
