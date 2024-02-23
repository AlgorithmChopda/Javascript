/*
    Implement a Fibonacci sequence generator using a generator function in JavaScript.
*/

function* generateFibonacciNumber() {
  let last = 1,
    secondLast = 0;
  let called = 0;

  while (true) {
    if (called <= 1) yield called++;

    let current = last + secondLast;
    secondLast = last;
    last = current;

    yield current;
  }
}

let getFibonacciNumber = generateFibonacciNumber();

for (let i = 1; i <= 10; i++) {
  console.log("No", i, ":", getFibonacciNumber.next().value);
}
