/* 
    1. Visit any page on the browser, and replace the content of all the p tags with the phrase “How’s the Josh?” using Javascript
*/
elements = document.getElementsByTagName("p");
for (ele of elements) {
  ele.innerHTML = "How’s the Josh?";
}
