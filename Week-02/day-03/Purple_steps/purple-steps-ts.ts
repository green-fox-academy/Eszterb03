'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]
let size= 10

function drawSquare(x: number, y: number) {
    ctx.strokeStyle ='black';
    ctx.strokeRect(x, y, size, size);
    ctx.fillStyle = 'purple';
    ctx.fillRect(x, y, size, size);
}

for (let x: number = 0; x <= canvas.height; x += size) {
            drawSquare(x, x)
        }
    
