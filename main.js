const sizeBtn = document.querySelector('.grid-size-prompt');
let defaultrows = 16;
let size = defaultrows * defaultrows;

sizeBtn.addEventListener('click', getGridSize);

function getGridSize(numberOfColumns) {
  numberOfColumns = window.prompt('Enter size of grid (Max 100)');
  if (numberOfColumns <= 100 && numberOfColumns >= 2) {
    size = numberOfColumns * numberOfColumns;
    console.log(size);
    generateGrid(size);
  } else {
    window.alert('Please enter a number greater than 1 and less than 100');
    getGridSize(numberOfColumns);
  }
}

function generateGrid(size) {
  const gridContainer = document.querySelector('.grid-container');

  for (let i = 1; i <= size; i++) {
    const newBox = document.createElement('div');
    console.log(`${i}, ${size}`);
    newBox.className = 'grid-box';
    gridContainer.appendChild(newBox);
  }
}
