'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

let squareFill = ["red", "purple", "yellow", "pink", "blue"]
// kell egy a" és kell egy space változó


function drawRain(squaresize, color) {
    ctx.fillStyle = color;
    ctx.fillRect((canvas.width / 2) - (squaresize / 2), (canvas.height / 2) - (squaresize / 2), squaresize, squaresize);
}
for (let i: number = 0; i < 20; i++) {
    let colorVar = i % squareFill.length
    let size =  - 30 
};
}