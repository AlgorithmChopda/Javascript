/*
    Use let and const to create arrays and objects. Try modifying, deleting properties within the array or object. What do you expect to happen in both cases? What actually happens in both cases. What is the difference between an object declared as a let or a const variable?
*/

function arrayOperations() {
  let ar = [1, 2, 3, 4, 5];
  console.log("Array with let");
  console.log("Original array:", ar);

  ar.push(100);
  console.log("array after adding element:", ar);

  ar.pop();
  console.log("array after removing element:", ar, "\n");

  const ar1 = [1, 2, 3];
  console.log("Array with const");
  console.log("Original array:", ar1);

  ar1.push(100);
  console.log("array after adding element:", ar1);

  ar1.pop();
  ar1.pop();
  console.log("array after removing 2 elements:", ar1);
}

function objectOperations() {
  console.log("\n");
  let obj = {
    name: "vinay",
    city: "pune",
  };

  console.log("Object with let");
  console.log("original object :", obj);

  obj.mobileNo = "1234567890";
  console.log("object after property addition :", obj);
  delete obj.city;
  console.log("object after property delete :", obj, "\n");

  const obj1 = {
    name: "naman",
    city: "nashik",
  };
  console.log("Object with const");
  console.log("original object :", obj1, "\n");

  obj1.state = "Maharashtra";
  console.log("object after property addition :", obj1);
  delete obj1.city;
  console.log("object after property delete :", obj1);
}

arrayOperations();
objectOperations();

/*
    1. What do you expect to happen in both cases?
        - The object should be modified as reference is stored

    2. What actually happens in both cases
        - Object gets modified
    
    3. What is the difference between an object declared as a let or a const variable?
        - in const object only properties can be changed but the location where obj is poiting cannot be changed
        eg:  const obj1 = {....}
             obj1 = {} // will give error
        - in let object it can be made to point to new location
*/
