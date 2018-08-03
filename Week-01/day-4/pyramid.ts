'use strict';



// Write a program that draws a
// pyramid like this:
//
//   ***
//  *****
// *******
//
//    *
// The pyramid should have as many lines as lineCount is
// for loop amiben van egy space loop (csökkenteni) és egy csillag loop(növelni)
// ki kell íratni vele 3 spacet és csökkenteni

let lineCount: number = 4;
let line2: string = '*';


for (let j: number = 0; j <= lineCount; j++) {
    let spaceCount: string = '';
    for (let k: number = j; k <= (lineCount - 1); k++) {
        spaceCount += ' ';
    }
    line2 += '**';
    console.log(spaceCount + line2);

}

