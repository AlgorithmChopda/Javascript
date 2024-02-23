/*
    Implement a Fibonacci sequence generator using a generator function in JavaScript.
*/

// generator function to get next fibonacci number
function* generateFibonacciNumber() {
  let last = 1,
    secondLast = 0;
  let called = 0;

  while (true) {
    if (called <= 1) yield called++;

    let current = last + secondLast;
    secondLast = last;
    last = current;

    // yield returns the value and saves the current state of the function
    yield current;
  }
}

let getFibonacciNumber = generateFibonacciNumber();

for (let i = 1; i <= 10; i++) {
  console.log("No", i, ":", getFibonacciNumber.next().value);
}

/*
  No 1 : 0
  No 2 : 1
  No 3 : 1
  No 4 : 2
  No 5 : 3
  No 6 : 5
  No 7 : 8
  No 8 : 13
  No 9 : 21
  No 10 : 34
*/
