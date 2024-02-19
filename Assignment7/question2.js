/*
    2. Write a function filterObj that will filter out all the keys of a flat object that have objects or arrays using Object.keys and Object.entries. Example:
    let obj = {
        a:”Apple”,
        b:[“Basketball”,”Baseball”],
        c: {
        call: “cellphone”
        },
        d: “Dog”
    }
    
    filterObject(obj) //This should return {a:”Apple”, d:”Dog”}
*/

function filterObject(obj) {
  let filterObject = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value != "object") {
      filterObject[key] = value;
    }
  }

  return filterObject;
}

let obj = {
  a: "Apple",
  b: ["Basketball", "Baseball"],
  c: {
    call: "cellphone",
  },
  d: "Dog",
};

let flatObject = filterObject(obj);
console.log("Flat object :", flatObject);
