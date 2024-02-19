/*
     How will you create a new copy of the object below while updating the value of address.details[0] to “5“?
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
*/

/*
     Asnwer:
        - creating a copy using "=" will just copy reference of the object, i.e internally it points to same object
        so updating one will update the actual object

        - creating shallow copy just copies elements upto 1 level i.e addres object internally will have reference of the 
        actual object 
        - so deep copy of object should be created to in order to only update the copy
*/

// deep copy
console.log("\nDeepCopy");
user = {
  name: "Harry Potter",
  age: 12,
  address: {
    details: ["4", "Privet Drive"],
    area: "Little Whinging",
    city: "Surrey",
    state: "England",
  },
};

console.log("User :", user, "\n");

userCopy = structuredClone(user);
userCopy.address.details[0] = "5";
console.log("After Updation");
console.log("User :", user, "\n");
console.log("Copy User :", userCopy);
