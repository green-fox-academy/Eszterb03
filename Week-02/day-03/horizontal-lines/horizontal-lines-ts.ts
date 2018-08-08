'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// create a line drawing function that takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// draw 3 lines with that function. Use loop for that.


/*ctx.strokeStyle = "black"
ctx.beginPath();
ctx.moveTo(200, 300);
ctx.lineTo(400, 300);
ctx.stroke();

ctx.strokeStyle = "purple"
ctx.beginPath();
ctx.moveTo(100, 200);
ctx.lineTo(400, 200);
ctx.stroke();*/


function lineDrawing1(one,two) {
    
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(one, two);
    ctx.lineTo(one + 50, two);
    ctx.lineWidth = 1;
    ctx.stroke();
}
let generatedone2:number = Math.ceil(Math.random() * 400);
let generatedtwo2:number = Math.ceil(Math.random() * 400);

for (let i: number = 0; i < 3; i++) {
   generatedtwo2 += 50;
   lineDrawing1(generatedone2, generatedtwo2)
}
;

/* 

    for (let i: number = 0; i < 3; i++) {
        generatedone += 100
        lineDrawing(generatedone,generatedtwo);
           }*/

/*ctx.strokeStyle = ("black");
    ctx.beginPath();
    ctx.moveTo(generatedone, generatedtwo);
    ctx.lineTo(generatedone, generatedtwo);
    ctx.lineWidth = 1;
    ctx.stroke()}*/