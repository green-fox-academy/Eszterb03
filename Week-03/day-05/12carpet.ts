'use strict';


const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let sizeSquare: number = 200;

ctx.fillStyle = 'yellow';
ctx.fillRect(0, 0, 600, 600);

let x: number = 200
let y: number = 0

function drawingCarpet(i: number) {
  if()
  ctx.strokeStyle = 'black';
  ctx.strokeRect(x, y, sizeSquare, sizeSquare);
  ctx.strokeStyle = 'black';
  ctx.strokeRect(x + i, y + i, sizeSquare, sizeSquare)
  ctx.strokeStyle = 'black';
  ctx.strokeRect(x - i, y + i, sizeSquare, sizeSquare)
  ctx.strokeStyle = 'black';
  ctx.strokeRect(x, y + i * 2, sizeSquare, sizeSquare)
}

for (let i: number = 200; i >= 0; i--) {
  drawingCarpet(i)

}



// ctx.strokeRect(200, 200, sizeSquare, sizeSquare);


