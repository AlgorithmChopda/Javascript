/*
    ● Given 2 arrays with related objects, return a new array where objects having the same id from each of the arrays are merged. Try to achieve it with a complexity - O(n).
    Example:

    ● let userNames = [{
    "id": 1,
    "first_name": "Nicki",
    }, {
    "id": 2,
    "first_name": "Raychel",
    }, {
    "id": 3,
    "first_name": "Demetris",
    }, {
    "id": 4,
    "first_name": "Amata",
    }]
    let userEmails = [{
    "id": 2,
    "email": "rmcgrady1@cpanel.net",
    }, {
    "id": 1,
    "email": "ncrozier0@squarespace.com",
    }, {
    "id": 4,
    "email": "abraiden3@canalblog.com",
    }, {
    "id": 3,
    "email": "dkilshall2@elpais.com",
    }]
    
    mergeById(userNames, userEmails) 
    This should return an array of users in the format: 
    
    [{
    "id": 1,
    "first_name": "Nicki",
    "email": "ncrozier0@squarespace.com",
    }, {
    "id": 2,
    "first_name": "Raychel",
    "email": "rmcgrady1@cpanel.net",
    }, {
    "id": 3,
    "first_name": "Demetris",
    "email": "dkilshall2@elpais.com",
    }, {
    "id": 4,
    "first_name": "Amata",
    "email": "abraiden3@canalblog.com",
    }]
*/

function mergeById(userNames, userEmails) {
  let mergedArray = [];

  // map to store index and id
  let indexIdMap = new Map(),
    i = 0;

  for (let userName of userNames) {
    mergedArray.push(structuredClone(userName));
    indexIdMap.set(userName.id, i++);
  }

  for (let userEmail of userEmails) {
    mergedArray[indexIdMap.get(userEmail.id)]["email"] = userEmail.email;
  }

  return mergedArray;
}

let userNames = [
  {
    id: 1,
    first_name: "Nicki",
  },
  {
    id: 2,
    first_name: "Raychel",
  },
  {
    id: 3,
    first_name: "Demetris",
  },
  {
    id: 4,
    first_name: "Amata",
  },
];

let userEmails = [
  {
    id: 2,
    email: "rmcgrady1@cpanel.net",
  },
  {
    id: 1,
    email: "ncrozier0@squarespace.com",
  },
  {
    id: 4,
    email: "abraiden3@canalblog.com",
  },
  {
    id: 3,
    email: "dkilshall2@elpais.com",
  },
];

mergedArray = mergeById(userNames, userEmails);
console.log("Merged array :", mergedArray);
