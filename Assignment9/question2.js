/*
    Go to youtube. Open any video. Add a button to the page using JS. On click of the button, the video playback speed should change to 10x
*/

var buttonStyle = `
    color: white;
    border-radius: 30px;
    height: 40px;
    width: 150px;
    background-color: rgb(39, 39, 39);
    border: transparent;
    margin-left: 1rem;
    cursor: pointer;
`;

//create button
let speedUp = document.createElement("button");
speedUp.id = "speedUp";
speedUp.textContent = "Speed 10x";
speedUp.style = buttonStyle;

// add onclick
speedUp.addEventListener("click", () => {
  document.getElementsByClassName(
    "video-stream html5-main-video"
  )[0].playbackRate = 2.5;
});

// append in the particular div
let parentDiv = document.getElementsByClassName(
  "item style-scope ytd-watch-metadata"
)[0];

parentDiv.appendChild(speedUp);
