/*
    Advanced Assignments: (optional)
    ● Write a function to check deep equality of two nested objects/arrays
    ● Write a recursive function to create a deep clone of a nested object
    ● Write a function that returns a nested key within an object:
    Example:

    {
        name:”Harry Potter”,
        age: 12,
        address: {
            details: [“4”, “Privet Drive”],
            area:”Little Whinging”,
            city: “Surrey”,
            state: “England”
        } 
    }
    getNestedKey(obj, “address.details.1”)
    This should return “Privet Drive”
*/

function checkDeepCopyObject(obj1, obj2) {
  // if length are different return false
  if (Object.keys(obj1).length != Object.keys(obj2).length) return false;

  for (let key in obj1) {
    if (!obj2.hasOwnProperty(key)) return false;

    // if type mismatch
    if (typeof obj1[key] != typeof obj2[key]) return false;

    // if Array or Object case
    // check if any one of the object is array or not
    let isFirstArray = Array.isArray(obj1[key]),
      isSecondArray = Array.isArray(obj2[key]);

    if (isFirstArray != isSecondArray) return false;

    // if array and length mismatch
    if (isFirstArray && obj1[key].length != obj2[key].length) return false;

    // if object recursively call the function
    if (typeof obj1[key] == "object") {
      if (!checkDeepCopyObject(obj1[key], obj2[key])) return false;
      continue;
    }

    // compare value
    if (obj1[key] != obj2[key]) return false;
  }

  return true;
}

let obj1 = {
  ar: [1, 2],
  name: "vinay",
  detail: {
    val: 100,
    ar1: [1, 2, 3],
  },
};

let obj2 = {
  ar: [1, 2],
  name: "vinay",
  detail: {
    val: 100,
    ar1: [1, 2, 3],
  },
};

console.log("comparing obj1 and obj2 :", checkDeepCopyObject(obj1, obj2)); // comparing obj1 and obj2 : true

function createDeepCopy(obj1) {
  // if array
  if (Array.isArray(obj1)) {
    let ar = [];
    for (let key in obj1) {
      // if element is object call the function recursively for the nested object
      if (typeof obj1 == "object" && obj1 !== null)
        ar.push(createDeepCopy(obj1[key]));
      else ar.push(obj1[key]);
    }

    return ar;
  } else {
    if (typeof obj1 == "object") {
      let ar = {};
      for (let key in obj1) {
        if (typeof obj1 == "object" && obj1 !== null)
          ar[key] = createDeepCopy(obj1[key]);
        else ar[key] = obj1[key];
      }

      return ar;
    }

    // if primitive
    return obj1;
  }
}

let object1 = {
  name: "vinay",
  ar: [1, 2, 3],
  temp: {
    val: 100,
  },
};

copyObject1 = createDeepCopy(object1);
console.log("Deep copy :", copyObject1); // Deep copy : { name: 'vinay', ar: [ 1, 2, 3 ], temp: { val: 100 } }

function getNestedKey(obj, key) {
  // seperate all the nested key calls
  let current = obj,
    keys = key.split(".");

  for (let currentKey of keys) {
    // assign current key value
    current = current[currentKey];
  }

  return current;
}

let obj = {
  name: "Harry Potter",
  age: 12,
  address: {
    details: ["4", "Privet Drive"],
    area: "Little Whinging",
    city: "Surrey",
    state: "England",
  },
};
let val = getNestedKey(obj, "address.details.1");
console.log("Fetched value :", val); // Fetched value : Privet Drive
