const sizeBtn = document.querySelector('.grid-size-prompt');
let gridSize = 16;

sizeBtn.addEventListener('click', getGridSize);

function getGridSize(size) {
  size = window.prompt('Enter size of grid (Max 100)');
  if (size <= 100 && size >= 2) {
    gridSize = size;
    generateGrid(gridSize);
  } else {
    window.alert('Please enter a number greater than 1 and less than 100');
    getGridSize(size);
  }
}

function generateGrid(size) {
  const gridContainer = document.querySelector('.grid-container');

  for (let i = 1; i <= size; i++) {
    const newBox = document.createElement('div');
    console.log(`${i}`);
    newBox.className = 'grid-box';
    gridContainer.appendChild(newBox);
  }
}

generateGrid(gridSize);
