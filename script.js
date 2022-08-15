const container = document.querySelector(".container");

let grid = 16;
let gridArray = []; //array of individual grid items [N x N]
let rowArray = []; // array of div containers [N]
let mouseDown = false;
const defBackground = "aliceblue";
let defColor = "chocolate";
let currentColor = defColor;
let lastButton = color;
const togglable = document.querySelectorAll(".toggle");

for (let i=0; i<grid; i++) {
  rowArray.push(document.createElement('div'));
  rowArray[i].classList.add('row');
  let tempList = [];
  for (let j=0;j<grid;j++) {
    tempList.push(document.createElement('div'));
    tempList[j].classList.add('pixel');
    rowArray[i].appendChild(tempList[j]);
  }
  gridArray.push(tempList);
  container.appendChild(rowArray[i]);
}

container.addEventListener("mousedown", () => mouseDown=true);
document.addEventListener("mouseup", () => mouseDown=false);

clear.addEventListener("click", clearGrid);

togglable.forEach(button => button.addEventListener("click", togglePen));

colpick.addEventListener("input", changeColor);

gridArray.forEach(row => row.forEach(pixel => {
  pixel.addEventListener("mousedown", handleMouse)
  pixel.addEventListener("mouseover", handleMouse)
}));

/*
gridArray.forEach(row => row.forEach(pixel => {
  pixel.addEventListener("mouseover", handleMouse)}));
*/

function handleMouse(event) {
  if (event.type==="mouseover" && !mouseDown) return;
  switch (lastButton) {
    case color: {
      addColor(event.target, currentColor);
      return;
    };
    case rainbow: {
      addColor(event.target, randomColor());
      return;
    };
    case eraser: {
      addColor(event.target, defBackground);
      return;
    };
  };
};

function toggleMouseDown(event) {
  if (mouseDown) addColor(event);
}

function togglePen(event) {
  lastButton.classList.remove("colorOn");
  event.target.classList.add("colorOn");
  lastButton=event.target;
}

function addColor(pixel, color) {
  pixel.style.backgroundColor=color;
};

function clearGrid() {
  gridArray.forEach(row => row.forEach(pixel => {
    pixel.style.backgroundColor=defBackground;
  }))
}

function randomColor() {
  return "#"+([0,0,0]).map(
    ()=>Math.floor(Math.random()*255).toString(16))
    .join("");
}

function changeColor(event) {
  currentColor=event.target.value;
}