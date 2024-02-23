let data;
let isSortedByName = false;

let debounceSearch = debounce(() => {
  let searchText = document.getElementById("searchinput").value;
  filteredData = data.filter(
    (record) =>
      record.firstName.toLowerCase().includes(searchText) ||
      record.firstName.includes(searchText)
  );
  displayTable(filteredData);
}, 250);

async function fetchData() {
  try {
    document.getElementById("loader").style.display = "block";
    response = await fetch("https://dummyjson.com/users");
    data = await response.json();

    data = data.users.map(({ id, firstName, lastName, gender, email }) => ({
      id,
      firstName,
      lastName,
      gender,
      email,
    }));

    return data;
  } catch (err) {
    throw err;
  } finally {
    document.getElementById("loader").style.display = "none";
  }
}

function displayTable(data) {
  emptyTable();
  let userTable = document.getElementById("usertable");

  data.forEach((userData) => {
    row = userTable.insertRow();
    for (let detail in userData) {
      cell = row.insertCell();
      cell.innerHTML = userData[detail];
    }
  });
}

function emptyTable() {
  var table = document.getElementById("usertable");
  var rowCount = table.rows.length;
  for (var i = rowCount - 1; i > 0; i--) {
    table.deleteRow(i);
  }
}

async function main() {
  try {
    data = await fetchData();
    displayTable(data);
  } catch (err) {
    console.log("error:", err);
  }
}

function sortDataByName() {
  if (isSortedByName) {
    displayTable(data);
    isSortedByName = false;
    document.getElementById("sortbtn").innerHTML = "sort by name";
    return;
  }

  copyOfData = [...data];
  copyOfData.sort((a, b) => {
    if (a.firstName < b.firstName) return -1;
    if (a.firstName > b.firstName) return 1;
    return 0;
  });

  displayTable(copyOfData);
  isSortedByName = true;
  document.getElementById("sortbtn").innerHTML = "orignal";
}

function debounce(callFunc, delay) {
  let timer;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(callFunc, delay);
  };
}

main();
