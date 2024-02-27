/*
    1. What is the difference between ++i and i++?
        - ++i will increment value of i first and will then evaluate expression
        - i++ will evaluate expression and will then increment the value of i
    
    
    2. What do you think would happen if you pass an index beyond the range of the string? Or if you pass a negative index? Try it out.
        - in both cases it will give undefined 

    
    3. Do you think JSON.stringify would work for arrays as well? What about nested objects? What happens if we pass numbers, strings, undefined, null to JSON.stringify?
        - Yes, JSON.stringify will work in all the cases


    4. What happens if you pass a regular/invalid JSON string to JSON.parse? What will happen if such an invalid function runs in the program? Will other parts of the code execute correctly after that?
        - in case of regular JSON.parse will execute correctly
        - in invalid case it will raise an exception i.e Expected char(any) at position any
            and other parts of code will not execute properly

*/

/*
    JSON.stringify
*/

const user = {
  subjects: ["C++", "Java"],
  list: {
    name: "abc",
    age: 20,
  },
  val: "value",
  marks: null,
  temp: undefined,
  a: "100",
  isValid: true,
  age: 50,
};

console.log("JSON:", JSON.stringify(user));

/*
    Preetier Output:
    output: 
    JSON: {
        subjects: ["C++", "Java"],
        list: { name: "abc", age: 20 },
        val: "value",
        marks: null,
        a: "100",
        isValid: true,
        age: 50,
    };
*/

/*
    Actual Output:
    JSON: {"subjects":["C++","Java"],"list":{"name":"abc","age":20},"val":"value","marks":null,"a":"100","isValid":true,"age":50}
*/

let invalidJsonString = "{";
let parsed = JSON.parse(invalidJsonString);
console.log("parsed :", parsed);

/*
    invalid json output:
    {
        SyntaxError: Expected property name or '}' in JSON at position 1 (line 1 column 2)
            at JSON.parse (<anonymous>)
            at Object.<anonymous> (/media/vinay/New Volume/Josh-Training/Javascript/Assignment5/question1.js:62:19)
            at Module._compile (node:internal/modules/cjs/loader:1378:14)
            at Module._extensions..js (node:internal/modules/cjs/loader:1437:10)
            at Module.load (node:internal/modules/cjs/loader:1212:32)
            at Module._load (node:internal/modules/cjs/loader:1028:12)
            at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:142:12)
            at node:internal/main/run_main_module:28:49

        Node.js v21.6.2
*/

invalidJsonString = `{
        name: "John",
        age: 30,
        city: "New York"
}`;
parsed = JSON.parse(invalidJsonString);
console.log("parsed :", parsed);

/*
    invalid json output:
    undefined:2
        name: "John",
        ^

    SyntaxError: Expected property name or '}' in JSON at position 10 (line 2 column 9)
        at JSON.parse (<anonymous>)
        at Object.<anonymous> (/media/vinay/New Volume/Josh-Training/Javascript/Assignment5/question1.js:86:19)
        at Module._compile (node:internal/modules/cjs/loader:1378:14)
        at Module._extensions..js (node:internal/modules/cjs/loader:1437:10)
        at Module.load (node:internal/modules/cjs/loader:1212:32)
        at Module._load (node:internal/modules/cjs/loader:1028:12)
        at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:142:12)
        at node:internal/main/run_main_module:28:49

    Node.js v21.6.2
*/

invalidJsonString = `{
    "name": "Alice",
    "age": 25,
    "city": "London",
}`;
parsed = JSON.parse(invalidJsonString);
console.log("parsed :", parsed);

/*
    invalid json output:
    undefined:5
    }
    ^

    SyntaxError: Expected double-quoted property name in JSON at position 60 (line 5 column 1)
        at JSON.parse (<anonymous>)
        at Object.<anonymous> (/media/vinay/New Volume/Josh-Training/Javascript/Assignment5/question1.js:113:19)
        at Module._compile (node:internal/modules/cjs/loader:1378:14)
        at Module._extensions..js (node:internal/modules/cjs/loader:1437:10)
        at Module.load (node:internal/modules/cjs/loader:1212:32)
        at Module._load (node:internal/modules/cjs/loader:1028:12)
        at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:142:12)
        at node:internal/main/run_main_module:28:49

    Node.js v21.6.2
*/
