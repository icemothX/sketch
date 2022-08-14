const container = document.querySelector(".container");

let grid = 16;
let gridArray = []; //array of individual grid items [N x N]
let rowArray = []; // array of div containers [N]
let mouseDown = false;

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
container.addEventListener("mouseup", () => mouseDown=false);

gridArray.forEach(row => row.forEach(pixel => {
  pixel.addEventListener("click", addColor)}));

gridArray.forEach(row => row.forEach(pixel => {
  pixel.addEventListener("mouseover", handleMouse)}));

function handleMouse(event) {
  if (mouseDown) addColor(event);
}

function addColor(event) {
  event.target.style.backgroundColor="chocolate";
};



