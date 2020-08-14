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


// NOT MY CODE! FROM STACKOVERFLOW MADE WEIRD TOO MANY CELLS IN COL 1
/* Creating the grid */
// function grid(el) {
//     var container = document.createElement("div");
//     container.id = "main";
//     container.className = "container";

//     for (i=0; i<16; i++) {
//         var row = document.createElement("div");
//         row.className = "row";
//         row.id = "row" + i;
      
//         for (k=0; k<16; k++) {
//             var box = document.createElement("div"); 
//             box.className = "box";
//             row.appendChild(box);
//         };
      
//         container.appendChild(row);      
//     };
  
//     el.appendChild(container);
// };

// grid(document.body);










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