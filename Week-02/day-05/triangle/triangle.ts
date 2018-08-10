const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');



function draw() {
        let sWidth = canvas.width;
        let sHeight = canvas.height;
        let path=new Path2D();
        path.moveTo((sWidth/2)+50,sHeight/2);
        path.lineTo((sWidth/2),(sHeight/2)-50);
        path.lineTo((sWidth/2)-50,sHeight/2);
        ctx.fill(path);
    }

draw();