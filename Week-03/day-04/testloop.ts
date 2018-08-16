// function hello(n: number) {
//     console.log('hello' + n)
//     hello(n + 1)
// }

// hello(0)

//add(3): 3+2+1

function addNumbers(n: number): number {
    if (n < 1) {
        throw new Error('can not understand negativ')
    }
    if (n == 1) {
        return 1;
    } else {
        return + addNumbers(n - 1);
    }


}
addNumbers(5)

//drawing 
// let size: number = canvas.width;
// let numberOfSquares: number = 100;

// function recursiveSquare(Size: number) {
//     if (size > 0) {
//         let x:number = (canvas.width/2-size/2);
//         let y:number = (canvas.heigth/2-size/2);
//         ctx.strokeRect(x,y,size,size);
//         recursiveSquare(size - 25);
//     }
// }

// recursiveSquare(CanvasGradient.width)