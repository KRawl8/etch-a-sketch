let gridDimension = 16;
let newGridDimensions;


const grid = document.querySelector('#canvas');


const makeGrid = () => {

    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    gridDimension = newGridDimensions || gridDimension; // gridDimension = 16 unless newGridDimensions isn't falsy

    const buttonText = document.querySelector('#gridSize');
    buttonText.textContent = `${gridDimension} x ${gridDimension}`;

    for (let i = 0; i < gridDimension; i++) {
        for (let j = 0; j < gridDimension; j++) {
            const gridDiv = document.createElement('div');
            const heightAndWidth = (640 / gridDimension) + "px";
            gridDiv.setAttribute('style', `height: ${heightAndWidth}; width: ${heightAndWidth};`);
            gridDiv.classList.add('gridDiv');
            gridDiv.addEventListener('mouseenter', changeColor);
            grid.appendChild(gridDiv);
        }
    }
};

const changeColor = (e) => {
    e.currentTarget.style.backgroundColor = "black";
    e.currentTarget.style.borderColor = "black";
};

const gridButton = document.querySelector('#gridDimensions'); //When user clicks the button they choose the new value for gridDimension
gridButton.addEventListener('click', () => {
    possibleGridDimensions = prompt("What dimension would you like the grid to have?");
    if (possibleGridDimensions >= 1 && possibleGridDimensions <= 100) {
        newGridDimensions = possibleGridDimensions;
    } else {
        alert("You must choose a number between 1 and 100!")
    }
    makeGrid();
});

makeGrid();