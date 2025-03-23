const sizeBtn = document.querySelector('.grid-size-prompt');
const gridContainer = document.querySelector('.grid-container');
let childElement = gridContainer.lastElementChild;
let size = 0;

sizeBtn.addEventListener('click', getGridSize);

function draw() {
  for (let i = 1; i <= gridContainer.children.length; i++) {
    let box = document.getElementById(`box-${i}`);
    
    box.addEventListener('mouseover', function() {
      box.style.background = 'black';
    });
  }
}

function removeExistingGrid() {
  while (childElement) {
    gridContainer.removeChild(childElement);
    childElement = gridContainer.lastElementChild;
  }
}

function getGridSize(numberOfColumns) {
  numberOfColumns = window.prompt('Enter size of grid (Max 100)');

  removeExistingGrid();

  if (numberOfColumns <= 100 && numberOfColumns >= 2) {
    size = numberOfColumns * numberOfColumns; // enough boxes to equal even rows and columns
    generateGrid(size, numberOfColumns);
    draw();
  } else {
    window.alert('Please enter a number greater than 1 and less than 100');
    getGridSize(numberOfColumns);
  }
}

// pass in total number of divs, and how many columns
function generateGrid(size, numberOfColumns) {
  for (let i = 1; i <= size; i++) {
    const containerWidth = 800;
    let divSize = containerWidth / numberOfColumns; //calculate for a square div size
    const newBox = document.createElement('div');

    newBox.className = 'grid-box';
    newBox.id = `box-${i}`;
    newBox.style.width = `${divSize}px`;
    newBox.style.height = `${divSize}px`;
    gridContainer.appendChild(newBox);
  }
}
