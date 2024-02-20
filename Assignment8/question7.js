/*
    6. Create a promise that makes a fetch call, but resolves with the data only 2 seconds after the data has been received in    the fetch.
    7. Complete the above tasks with async/await.
*/

async function sleep() {
  return new Promise((res) => {
    setTimeout(() => res(), 2000);
  });
}

async function fetchData() {
  let response = await fetch("https://reqres.in/api/users");
  let data = await response.json();

  await sleep(2000);
  console.log("after 2 second");
  console.log("Data :", data);
}

fetchData();
