const sizeBtn = document.querySelector('.grid-size-prompt');
let gridSize = 0;

sizeBtn.addEventListener('click', generateGrid);

function generateGrid(size) {
  size = window.prompt('Enter grid size (Max: 100)');
  const gridContainer = document.querySelector('.grid-container');
  const newBox = document.createElement('div');

  if (size <= 100 && size >= 2) {
    gridSize = size;

    for (let i = 1; i <= size; i++) {
      console.log(`${gridSize}, ${i}`);
      newBox.className = 'grid-box';
      newBox.style.border = '.5px solid black';
      gridContainer.appendChild(newBox);

    }
  } else {
    window.alert('Please enter a number greater than 1 and less than 100');
    generateGrid(size);
  }
}
