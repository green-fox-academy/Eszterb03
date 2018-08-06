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
let percentSign: string = '%'
let spaceCount: string = ' '


for (let j = 0; j <= lineCount; j++) {
    if (j == 1 || j == lineCount)
        console.log(Array(lineCount).join(percentSign));
    if (j == 2)
        console.log(Array(lineCount - 4).join(percentSign) + spaceCount + percentSign)
    if (j == 3)
        console.log(percentSign + spaceCount + percentSign + spaceCount + percentSign)
    if (j == 4)
        console.log(percentSign + spaceCount + spaceCount + percentSign + percentSign)
    if (j == 5)
        console.log(percentSign + spaceCount + spaceCount + spaceCount + percentSign)
}
