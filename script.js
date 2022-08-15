const container = document.querySelector(".container");

let grid = 16;
let gridArray = []; //array of individual grid items [N x N]
let rowArray = []; // array of div containers [N]
let mouseDown = false;
const defBackground = "aliceblue";
let defColor = "chocolate";
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

gridArray.forEach(row => row.forEach(pixel => {
  pixel.addEventListener("click", addColor)}));

gridArray.forEach(row => row.forEach(pixel => {
  pixel.addEventListener("mouseover", handleMouse)}));

function handleMouse(event) {
  if (mouseDown) addColor(event);
}

function togglePen(event) {
  lastButton.classList.remove("colorOn");
  event.target.classList.add("colorOn");
  lastButton=event.target;
  switch (true) {
    case event.target===eraser: {
      defColor=defBackground;
      return;
    };
    case event.target===color: defColor="chocolate";
  }
}

function addColor(event) {
  event.target.style.backgroundColor=defColor;
};

function clearGrid() {
  gridArray.forEach(row => row.forEach(pixel => {
    pixel.style.backgroundColor=defBackground;
  }))
}

