'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplicati;

for (let i: number = 0; i < 4; i++) {
    
    let varNumX: number = Math.ceil(Math.random() * 400);
    let varNumY: number = Math.ceil(Math.random() * 400);
    let generatnum: number = Math.ceil(Math.random() * 400);
    let generatnum2: number = Math.ceil(Math.random() * 400);
    let color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    ctx.fillStyle = color;
    ctx.fillRect(varNumX, varNumY, generatnum, generatnum2);
};

