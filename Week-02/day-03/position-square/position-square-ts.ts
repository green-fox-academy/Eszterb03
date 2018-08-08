'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.


function drawSquare(VarinX, VarinY) {
    let color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    ctx.fillStyle = color;
    ctx.fillRect(VarinX, VarinY, 50, 50);
};
let newSquareX: number = Math.ceil(Math.random() * 400);
let newSquareY: number = Math.ceil(Math.random() * 400);

for (let i: number; i < 3; i++) {
    drawSquare(newSquareX, newSquareY)
}
