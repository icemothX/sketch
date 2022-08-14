const container = document.querySelector(".container");

let grid = 16;
let gridArray = []; //array of individual grid items [N x N]
let rowArray = []; // array of dic containers [N]

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
