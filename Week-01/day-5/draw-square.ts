'use strict';


// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

let lineCount: number = 6;
let percentSign: string = '%';

for (let j: number = 1; j <= lineCount; j++) {
    if (j == 1 || j == 6)

        console.log(percentSign + '%%%%%');
    else console.log(percentSign + '    '+ '%')
};
