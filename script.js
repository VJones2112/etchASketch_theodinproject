// Variables
const gridContainer = document.getElementById('container');
const colorScales = document.querySelectorAll('.colors');
let hue = 0;

// The Functions
function makeGrid() {
    gridContainer.innerHTML = "";

    //Get the size of the grid
    let userSize = document.getElementById('gridSize').value;
    
    // Set the size of the grid
    if (userSize <= 0 || userSize > 64) {
        alert('Please enter a number from 1 to 64.');
        return; // Thank you fernandopaz1!
    };
    if (userSize > 0 && userSize <= 64) {
        gridContainer.style.gridTemplateColumns = `repeat(${userSize}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${userSize}, 1fr)`;
    };

    // Create the grid
    for (let i = 1; i <= userSize * userSize; i++) {
        let div = document.createElement('div');
        div.className = `grid-cell${i}`;
        gridContainer.appendChild(div);
        div.addEventListener('mouseover', changeColor);
    };
};


function resetGrid() {
    gridContainer.innerHTML = "";
    document.getElementById('gridSize').value = "";
};

function changeColor(event) {
    if (colorScale === 'grayScale') {
        event.target.style.background = `hsl(0, 0%, ${hue}%)`;
        hue += 0.5;
            if (hue >= 99) {
                hue = 0;
            }
    }; 
    if (colorScale === 'colorScale') {
        event.target.style.background = `hsl(${hue}, 100%, 50%)`;
        hue += 3;
    };
};


// Event Listeners
document.getElementById('gridSize').addEventListener('change', makeGrid);
document.getElementById('resetGrid').addEventListener('click', resetGrid);
colorScales.forEach(element => element.addEventListener('click', (e) => {
    colorScale = element.id;
}));