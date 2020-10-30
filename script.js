// Work on:
// Changing userSize should not append new grid on top of old
// Background CSS




//***************I'm going to try without making a table. */
let gridContainer = document.getElementById('container');
const colorScales = document.querySelectorAll('.colors');
let hue = 0;
// let userSize = document.getElementById('gridSize').value;


// The Functions
function makeGrid() {
    // resetGrid(); // Not working here
    //Get the size of the grid
    let userSize = document.getElementById('gridSize').value;
    
    // Set the size of the grid
    if (userSize <= 64 && userSize > 0) {
        gridContainer.style.gridTemplateColumns = `repeat(${userSize}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${userSize}, 1fr)`;
    } else {
        alert('Please enter a number from 1 to 64.');
        // gridContainer.style.gridTemplateColumns = '';
        // gridContainer.style.gridTemplateRows = '';
    }
    
    
    // Create the grid
    for (let i = 1; i <= userSize * userSize; i++) {
        let div = document.createElement('div');
        div.className = `grid-item grid-item${i}`;
        gridContainer.appendChild(div);
        div.addEventListener('mouseover', changeColor);
    };

    // Apply changeColor function unnecessary?
    // changeColor();
};


function resetGrid() {
    // gridContainer.style.background = 'white';
    gridContainer.innerHTML = "";
    document.getElementById('gridSize').value = "";
}

function changeColor(event) {
    if (colorScale === 'grayScale') {
        event.target.style.background = `hsl(0, 0%, ${hue}%)`;
        hue += 0.5;
            if (hue >= 99) {
                hue = 0;
            }
    } 
    if (colorScale === 'colorScale') {
        event.target.style.background = `hsl(${hue}, 100%, 50%)`;
        hue += 3;
    }

    console.log(event.target);
};


// Event Listeners
document.getElementById('gridSize').addEventListener('change', makeGrid);

document.getElementById('resetGrid').addEventListener('click', resetGrid);

// gridContainer.addEventListener('mouseover', changeColor);
// div.addEventListener('mouseover', changeColor); // nope
colorScales.forEach(element => element.addEventListener('click', (e) => {
    colorScale = element.id;
}));