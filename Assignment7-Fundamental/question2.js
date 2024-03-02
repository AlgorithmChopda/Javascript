/*
    ● Write a functiongroupBy to convert an array of objects into groups based on the specified key:
 let users = [
  {
    id: 1,
    first_name: "Nicki",
    email: "ncrozier0@squarespace.com",
    date_of_birth: "2009/05/09",
    gender: "Male",
  },
  {
    id: 2,
    first_name: "Raychel",
    email: "rmcgrady1@cpanel.net",
    date_of_birth: "1996/11/05",
    gender: "Female",
  },
  {
    id: 3,
    first_name: "Demetris",
    email: "dkilshall2@elpais.com",
    date_of_birth: "2018/12/31",
    gender: "Male",
  },
  {
    id: 4,
    first_name: "Amata",
    email: "abraiden3@canalblog.com",
    date_of_birth: "2012/05/23",
    gender: "Female",
  },
];

groupBy(users, “gender”)
This should return 
{
“Male”:[
    {id:1, first_name:”Nicki”, ...}, 
    {id:3, first_name:”Demetris”, ...}
]
“Female”:[
    {id: 2, first_name:”Raychel”, ...},
    {id: 4, first_name:”Amata”, ...}
]
}
*/

function groupBy(users, key) {
  let groupByObject = {};
  for (let user of users) {
    val = user[key];
    userCopy = structuredClone(user);

    // if object already present with the key
    if (groupByObject.hasOwnProperty(val)) {
      groupByObject[val].push(userCopy);
    } else {
      // or put the copy in array
      groupByObject[val] = [userCopy];
    }
  }

  return groupByObject;
}

let users = [
  {
    id: 1,
    first_name: "Nicki",
    email: "ncrozier0@squarespace.com",
    date_of_birth: "2009/05/09",
    gender: "Male",
  },
  {
    id: 2,
    first_name: "Raychel",
    email: "rmcgrady1@cpanel.net",
    date_of_birth: "1996/11/05",
    gender: "Female",
  },
  {
    id: 3,
    first_name: "Demetris",
    email: "dkilshall2@elpais.com",
    date_of_birth: "2018/12/31",
    gender: "Male",
  },
  {
    id: 4,
    first_name: "Amata",
    email: "abraiden3@canalblog.com",
    date_of_birth: "2012/05/23",
    gender: "Female",
  },
];

key = "email";
groupByUser = groupBy(users, key);
console.log("Group By User :", groupByUser);

/* 
Group By User : {
  'ncrozier0@squarespace.com': [
    {
      id: 1,
      first_name: 'Nicki',
      email: 'ncrozier0@squarespace.com',
      date_of_birth: '2009/05/09',
      gender: 'Male'
    }
  ],
  'rmcgrady1@cpanel.net': [
    {
      id: 2,
      first_name: 'Raychel',
      email: 'rmcgrady1@cpanel.net',
      date_of_birth: '1996/11/05',
      gender: 'Female'
    }
  ],
  'dkilshall2@elpais.com': [
    {
      id: 3,
      first_name: 'Demetris',
      email: 'dkilshall2@elpais.com',
      date_of_birth: '2018/12/31',
      gender: 'Male'
    }
  ],
  'abraiden3@canalblog.com': [
    {
      id: 4,
      first_name: 'Amata',
      email: 'abraiden3@canalblog.com',
      date_of_birth: '2012/05/23',
      gender: 'Female'
    }
  ]
}

 */
