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
