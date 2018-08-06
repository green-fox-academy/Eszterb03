'use strict';


// Write a program that draws a
// square like this:
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%

let lineCount: number = 6;
let percentSign: string = '%';
let spaceCount: string = '';
let place: string = ' ';


for (let i: number = 1; i <= lineCount; i++) {
        for (let j: number = 1; j <= lineCount; j++)
        /* {
                if (i == 1 || i == lineCount || j == 1 || j == lineCount || i == j) {
                    spaceCount += percentSign;
                } else {
                    spaceCount += place;
                }
        } */
        console.log(spaceCount);
        spaceCount = '';
}