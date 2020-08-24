const div = document.getElementsByTagName('div');
const tableDiv = document.getElementById('tableCanvas');
const colorScales = document.querySelectorAll('.colors');
let hue = 0;

// The Functions
function makeGrid() {
    tableDiv.innerHTML = "";
    let gridSize = document.getElementById('gridSize').value;
    for(let i = 0; i < gridSize; i++) {
        let myRow = document.createElement('div'); // this is actually 1st columns
        myRow.id = 'row' + i;
        myRow.classList.add('gridDiv');
        //myRow.style.border = '0'; // Doesn't work
        myRow.style.backgroundColor = 'orange'; 
        tableDiv.appendChild(myRow);
        let rowWidth = document.getElementById('row' + i);
        for(let j = 0; j < gridSize; j++) {
            let myCell = document.createElement('div');
            rowWidth.appendChild(myCell);
        };
    };
}

function resetGrid() {
    tableDiv.innerHTML = "";
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
}


// Event Listeners
document.getElementById('gridSize').addEventListener('change', makeGrid);
document.getElementById('resetGrid').addEventListener('click', resetGrid);
document.getElementById('tableCanvas').addEventListener('mouseover', changeColor);
colorScales.forEach(element => element.addEventListener('click', (e) => {
    colorScale = element.id;
}))