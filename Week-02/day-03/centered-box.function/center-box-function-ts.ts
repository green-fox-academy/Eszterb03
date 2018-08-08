'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 1 parameter:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

function centerBox1(squaresize: number) {
    ctx.strokeStyle = "black";
    ctx.strokeRect((canvas.width/ 2) - (squaresize / 2), (canvas.height / 2) - (squaresize / 2), squaresize, squaresize);
}
for (let i: number = 0; i < 3; i++) {
    let generatenum = Math.ceil(Math.random() * 400);
    centerBox1(generatenum)
};
