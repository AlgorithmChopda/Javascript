// 3. Create a form to submit a blog to a mock API (reqres.in)

let blogForm = document.getElementById("blogform");

blogForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let title = document.getElementById("title");
  let content = document.getElementById("content");

  if (!title || !content) {
    alert("title or content is empty");
  }

  let url = "https://reqres.in/api/";
  let options = {
    method: "POST",
    body: JSON.stringify({ title, content }),
  };

  fetch(url, options)
    .then((res) => {
      if (res.ok != 200) throw res;
      alert("data added");
    })
    .catch((res) => {
      alert("error occured while adding data");
    });
});
