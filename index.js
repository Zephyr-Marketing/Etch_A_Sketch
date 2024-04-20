const container = document.getElementById('container');
const newDimensions = document.getElementById('newDimensions');
const draw = document.getElementById("draw");
const eraser = document.getElementById("eraser");
let isDrawingEnabled = true;

function createGrid(numSquaresPerSide) {
    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(${numSquaresPerSide}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${numSquaresPerSide}, 1fr)`;

    for (let i = 0; i < numSquaresPerSide * numSquaresPerSide; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);

        square.addEventListener("mouseenter", () => {
            if (isDrawingEnabled) {
                square.style.backgroundColor = "black";
            } else {
                square.style.backgroundColor = "white";
            }
        });
        
        square.addEventListener("click", () => {
            if (isDrawingEnabled) {
                square.style.backgroundColor = "black";
            } else {
                square.style.backgroundColor = "white";
            }
        });
    }
}

draw.addEventListener("click", () => {
    isDrawingEnabled = true;
});

eraser.addEventListener("click", () => {
    isDrawingEnabled = false;
});

newDimensions.addEventListener('click', () => {
    let numSquaresPerSide = prompt('Enter the number of squares per side for the new grid:');
    numSquaresPerSide = parseInt(numSquaresPerSide); // Convert input to integer

    if (numSquaresPerSide !== null && !isNaN(numSquaresPerSide) && numSquaresPerSide > 0) {
        if (numSquaresPerSide > 100) {
            numSquaresPerSide = 100; // Set to maximum value if exceeded
            alert("The maximum number of squares per side is 100. Grid size set to 100.");
        }
        createGrid(numSquaresPerSide);
    } else {
        alert("Please enter a valid number greater than 0.");
    }
});

createGrid(16);