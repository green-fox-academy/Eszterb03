const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawLine(drawx: number, drawy: number) {
    ctx.strokeStyle = "purple";
    ctx.beginPath();
    ctx.moveTo(0+drawx,canvas.height/2+drawx,);
    ctx.lineTo(canvas.width/2+drawy, canvas.height/2+drawy);
    ctx.stroke();
}

for (let i: number = 0; i <= canvas.width; i += 20) {
    drawLine(i,i);
}