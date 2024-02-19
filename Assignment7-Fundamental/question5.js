/* Write a function to filter an array of strings to hold only unique values */

function getUnique(ar) {
  let set = new Set(ar);

  // return array of unique values
  return [...set];
}

let ar = ["vinay", "temp", "vinay", "abc", "temp"];
uniqueList = getUnique(ar);

console.log(uniqueList);
