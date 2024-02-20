function fetchData() {
  return new Promise((res) => {
    fetch("https://reqres.in/api/users")
      .then((data) => data.json())
      .then((data) => {
        setTimeout(() => {
          console.log("after 2 second");
          res(data);
        }, 2000);
      })
      .catch((err) => {
        console.log("error :", err);
      });
  });
}

fetchData().then((data) => {
  console.log("Data :", data);
});
