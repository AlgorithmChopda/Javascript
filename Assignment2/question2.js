/*
    Use let and const to create arrays and objects. Try modifying, deleting properties within the array or object. What do you expect to happen in both cases? What actually happens in both cases. What is the difference between an object declared as a let or a const variable?
*/

function arrayOperations() {
  let ar = [1, 2, 3, 4, 5];
  console.log("Array with let");
  console.log("Original array:", ar); // Original array: [ 1, 2, 3, 4, 5 ]

  ar.push(100);
  console.log("array after adding element:", ar); // array after adding element: [ 1, 2, 3, 4, 5, 100 ]

  ar.pop();
  console.log("array after removing element:", ar, "\n"); // array after removing element: [ 1, 2, 3, 4, 5 ]

  const ar1 = [1, 2, 3];
  console.log("Array with const");
  console.log("Original array:", ar1); // Original array: [ 1, 2, 3 ]

  ar1.push(100);
  console.log("array after adding element:", ar1); // array after adding element: [ 1, 2, 3, 100 ]

  ar1.pop();
  ar1.pop();
  console.log("array after removing 2 elements:", ar1); // array after removing 2 elements: [ 1, 2 ]
}

function objectOperations() {
  console.log("\n");
  let obj = {
    name: "vinay",
    city: "pune",
  };

  console.log("Object with let");
  console.log("original object :", obj); // original object : { name: 'vinay', city: 'pune' }

  obj.mobileNo = "1234567890";
  console.log("object after property addition :", obj); // object after property addition : { name: 'vinay', city: 'pune', mobileNo: '1234567890' }

  delete obj.city;
  console.log("object after property delete :", obj, "\n"); // object after property delete : { name: 'vinay', mobileNo: '1234567890' }

  const obj1 = {
    name: "naman",
    city: "nashik",
  };
  console.log("Object with const");
  console.log("original object :", obj1, "\n"); // original object : { name: 'naman', city: 'nashik' }

  obj1.state = "Maharashtra";
  console.log("object after property addition :", obj1); // object after property addition : { name: 'naman', city: 'nashik', state: 'Maharashtra' }

  delete obj1.city;
  console.log("object after property delete :", obj1); // object after property delete : { name: 'naman', state: 'Maharashtra' }
}

arrayOperations();
objectOperations();

/*
    1. What do you expect to happen in both cases?
        - The object should be modified as reference is stored
        - Array should also be modified

    2. What actually happens in both cases
        - Object gets modified
        - Array also gets modified as methods directly update underlying array
    
    3. What is the difference between an object declared as a let or a const variable?
        - in const object only properties can be changed but the location where obj is poiting cannot be changed
        eg:  const obj1 = {....}
             obj1 = {} // will give error
        - in let object it can be made to point to new location
*/
