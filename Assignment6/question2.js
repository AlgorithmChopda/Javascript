/*
    2. What makes a method mutating or non mutating in Javascript? Find out whether each of the following methods are mutating or non-mutating. How can you verify this?:

    push
    pop
    filter
    find
    sort
    map
*/

/*
    Answers:
    
    1. Mutating Methods are methods that modify the original array without returning anything
    2. Non-mutating Methods internally create a copy of an array modifies it accordingly and returns the new array
*/

let ar = [1, 2, 300, 4, 5];

// mutating
ar.push(6);
console.log("Push :", ar); // Push : [ 1, 2, 300, 4, 5, 6 ]

// mutating
ar.pop();
console.log("Pop :", ar); // Pop : [ 1, 2, 300, 4, 5 ]

// non-mutating
updatedAr = ar.filter((ele) => ele % 2 == 0);
console.log("Filter :", updatedAr); // Filter : [ 2, 300, 4 ]

// mutating
index = ar.find((ele) => ele > 2 && ele % 2 == 0);
console.log("Find :", index); // Find : 300

// mutating
ar.sort((a, b) => a - b);
console.log("Sort :", ar); // Sort : [ 1, 2, 4, 5, 300 ]

// non-mutating
updatedAr = ar.map((ele) => ele * 2);
console.log("Map :", updatedAr); // Map : [ 2, 4, 8, 10, 600 ]
