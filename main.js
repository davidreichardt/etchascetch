const sizePrompt = document.querySelector('.grid-size-prompt');
const gridContainer = document.querySelector('.grid-container');
const columnDisplay = document.querySelector('.grid-size');
let columns;
let size;

sizePrompt.addEventListener('click', function () {
  columns = window.prompt('Enter number of columns you want between 1-100');
  size = columns * columns;
  
  if (checkBounds(columns)) {
    generateGrid(columns, size);
  } else {
    window.alert('Must be between 1-100');
  }
});

function checkBounds(columnsEntered) {
  if (columnsEntered >= 1 && columnsEntered <= 100) {
    return true;
  } else {
    return false;
  }
}

function generateGrid(numberOfColumns, numberOfBoxes) {
  const containerWidth = 800;
  let boxSize = containerWidth / numberOfColumns;
  columnDisplay.textContent = numberOfColumns;

  if (gridContainer.children.length === 0) {
    console.log('draw');
    for (let i = 1; i <= numberOfBoxes; i++) {
      const newBox = document.createElement('div');

      newBox.classList.add('grid-box');
      newBox.setAttribute('id', `box-${i}`);
      newBox.style.width = `${boxSize}px`;
      newBox.style.height = `${boxSize}px`;
      gridContainer.appendChild(newBox);
    }
    draw();
  } else {
    replaceExistingGrid();
  }
}

function replaceExistingGrid() {
  let childElement = gridContainer.lastElementChild;

  while (childElement) {
    gridContainer.removeChild(childElement);
    childElement = gridContainer.lastElementChild;
  }

  generateGrid(columns, size);
}

function randomColor() {
  let randomizer = () => Math.floor(Math.random() * 256);
  return (rgb = `rgb(${randomizer()}, ${randomizer()}, ${randomizer()})`);
}

function addColor() {
  let hoveredBoxId = getBoxId(this);
  let hoveredBox = document.getElementById(hoveredBoxId);

  hoveredBox.style.background = randomColor();
  console.log(hoveredBoxId, hoveredBox);
}

function getBoxId(box) {
  let boxId;
  return (boxId = box.id);
}

function draw() {
  if (gridContainer.children.length !== 0) {
    //get all boxes
    let boxes = document.querySelectorAll('.grid-box');

    boxes.forEach((box) => {
      box.addEventListener('mouseover', addColor);
    });
  }
}

generateGrid(16, 256);
draw();
