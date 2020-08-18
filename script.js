// // Youtube tutorial from The Coding Train

// let columns = 10;
// let rows = 10;

// function setup() {
//     // createCanvas(300,300);
//     colors = make2DArray(cols, rows);
//     for (let i = 0; i < cols; i++) {
//         for (let j = 0; j< rows; j++) {
//             colors[i][j] = random(255)
//         }
//     }

// }
// // This didn't work
// // function draw() {
// //     document.body.style.background = ('lightblue no-repeat 100px');
// //     for (i = 0; i < columns; i++) {
// //         for(j = 0; j < rows; j++) {
// //             let x = i * 30;
// //             let y = i * 30;
// //             // stroke(0);
// //             j.body.style.background = ('255');
// //             j.rect(x, y, 30, 30)
// //         }

// //     }

// // }
// // draw()


// function make2DArray(cols, rows) {
//     let arr = new Array(cols);
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = new Array(rows)
//     }
//     return arr;
// }

// make2DArray(5, 5)
// // let sketchPad = () => document.getElementById('container').createElement('div');
// // document.addEventListener('click', sketchPad)











// // function sketchGrid(number) {
// //     let grid = document.getElementById('container');
// //     let gridDiv = document.createElement('div');
    
// //     for (i = 0; i < 5; i++) {
// //         gridDiv = document.body.appendChild(gridDiv);
// //         gridDiv.className = 'row'
// //         // for(j = 0; j < 5; j++) {
// //         //     let columnDiv = document.createElement('div');
// //         //     columnDiv = document.body.appendChild(columnDiv);
// //         //     columnDiv.className = 'column'
// //         // }
// //     }

// // }

// // sketchGrid(16)





// Trying again on 8.17
// Pseudo Code
// Get User Input
// get user input
// store user input in variable
// use variable to create grid
// Create Grid Function
// user input squared makes the grid
// CSS makes grid flexbox or grid
// Append the grid to Div


// let getDiv = document.getElementById('container')
// // let createDiv = document.createElement('div');
// getDiv.innerHTML = '<div></div>'
// // console.log(createDiv)
// function createGrid(number) {
//     for(let i = 0; i < number; i++) {
//         let makeDivs = document.createElement('div');
//         getDiv.appendChild(makeDivs);
//     }
    
//     // addDiv = getDiv.innerHTML;
//     // addDiv.append(getDiv);
//     // console.log(createDiv)
// } 
// // console.log(createGrid)
// createGrid(5);
// console.log(createGrid(5))
// document.getElementById('gridSize').addEventListener('click', createGrid);

document.getElementById('gridSize').addEventListener('change', makeGrid);
document.getElementById('resetGrid').addEventListener('click', resetGrid);

function makeGrid() {
    let tbl = document.getElementById('tableCanvas');
    let gridSize = document.getElementById('gridSize').value;
    for(let i = 0; i < gridSize; i++) {
        let myRow = document.createElement('div')
        myRow.id = 'row' + i;
        tbl.appendChild(myRow);
        let rowW = document.getElementById('row' + i);

        for(let j = 0; j < gridSize; j++) {
            let myCell = document.createElement('div');
            rowW.appendChild(myCell);
        }
    }
}

function resetGrid() {
    let removeDiv = document.getElementById('tableCanvas');
    removeDiv.parentNode.removeChild(removeDiv)
    console.log('Remove this')
}