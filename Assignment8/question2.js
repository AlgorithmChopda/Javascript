/*
    2.  Using promises - write a function that fetches data from an API endpoint (GET https://reqres.in/api/users ). Log the data into the console once it is received
*/

function fetchData() {
  fetch("https://reqres.in/api/users")
    .then((response) => {
      // then chaining as json returns a promise
      if (response.ok) return response.json();
      return response;
    })
    .then((data) => {})
    .catch((err) => {
      console.log("error :", err);
    });
}

fetchData();
