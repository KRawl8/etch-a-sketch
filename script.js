let gridDimension = 16;
let newGridDimensions;
let paintColor = "black";

const grid = document.querySelector('#canvas');


const makeGrid = () => {

    while (grid.firstChild) { // Removes all the boxes so new ones can be made
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
            gridDiv.addEventListener('mouseenter', paint);
            grid.appendChild(gridDiv);
        }
    }
};

const buttonColor = document.querySelectorAll('.colorButton');
buttonColor.forEach((button) => {
    button.addEventListener('click', () => {
        switch (button.id) {
            case "black":
                paintColor = "blue";
                break;
            case "random":
                paintColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
                break;
        }
    })
}
);

const paint = (e) => {
    e.currentTarget.style.backgroundColor = paintColor;
    e.currentTarget.style.borderColor = paintColor;
};

const gridButton = document.querySelector('#gridDimensions'); // When user clicks the button they choose the new value for gridDimension
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