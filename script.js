let gridDimension = 16;
let newGridDimensions;
let paintColor = "black";
let isRainbow = false;
let isShader = false;

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
                paintColor = "black";
                isRainbow = false;
                isShader = false;
                break;
            case "random":
                paintColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
                isRainbow = false;
                isShader = false;
                break;
            case "rainbow":
                isRainbow = true;
                isShader = false;
                break;
            case "shader":
                isShader = true;
                isRainbow = false;
                break;
        }
    })
}
);

const paint = (e) => { // When each box is hoveredd over, this function is called
    if (isRainbow === true) {
        paintColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        e.currentTarget.style.backgroundColor = paintColor;
        e.currentTarget.style.borderColor = paintColor;
        e.currentTarget.style.opacity = 1;
    } else if (isShader === true) {
        if (e.currentTarget.style.backgroundColor != "black") {
            e.currentTarget.style.opacity = 0;
        }
        e.currentTarget.style.backgroundColor = "black";
        e.currentTarget.style.borderColor = "black";
        e.currentTarget.style.opacity = Number(e.currentTarget.style.opacity) + 0.1;
    } else {
        e.currentTarget.style.opacity = 1;
        e.currentTarget.style.backgroundColor = paintColor;
        e.currentTarget.style.borderColor = paintColor;
    }
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