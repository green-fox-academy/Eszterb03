const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawLine1(drawx: number, drawy: number) {
    ctx.strokeStyle = "purple";
    ctx.beginPath();
    ctx.moveTo(drawx, 0);
    ctx.lineTo(canvas.width, drawy);
    ctx.stroke();
}
for (let i: number = 0; i <= canvas.width; i += 10) {
    drawLine1(i,i);
}

function drawLine2(drawx: number, drawy: number) {
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.moveTo(0, drawx);
    ctx.lineTo(drawy, canvas.height);
    ctx.stroke();
}
for (let i: number = 0; i <= canvas.height; i += 20) {
    drawLine2(i,i);
}



