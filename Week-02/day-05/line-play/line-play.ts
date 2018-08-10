const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawLine(drawx: number, drawy: number) {
    ctx.strokeStyle = "purple";
    ctx.beginPath();
    ctx.moveTo(drawx, 0);
    ctx.lineTo(canvas.width, drawy+=50);
    ctx.stroke();
}
for (let i: number = 0; i <= canvas.width; i += 20) {
    drawLine(i,i);
}

function drawLine2(drawx: number, drawy: number) {
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.moveTo(0, drawx);
    ctx.lineTo(drawy+=50, canvas.height);
    ctx.stroke();
}
for (let i: number = 0; i <= canvas.height; i += 20) {
    drawLine2(i,i);
}



