'use strict';


// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is
let lineCount: number = 7;
let line2: string = '*';
let spaceCount: string = ' '

for (let i: number = 0; i < lineCount / 2; i++) {
    for (let j: number = i; j < lineCount / 2; j++) {
        spaceCount += ' ';
    }
    console.log(spaceCount + line2);
    line2 += '**';
    spaceCount = ' ';
}
for (let k: number = 5; k <= lineCount; k++) {
    for (let l: number = 5; l <= k; l++) {
        if (k == 5) {
            spaceCount += '  ';
            line2 = "*****"
        }
        else if (l == 6) {
            spaceCount += ' ';
            line2 = '***'
        }
        else if (l == 7) {
            line2 = '*'
        }
    }
    console.log(spaceCount + line2);
}