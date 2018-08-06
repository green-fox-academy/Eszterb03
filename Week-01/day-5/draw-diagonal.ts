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
    console.log(percentSign + '%%%%%');
for (let k=j; k <= lineCount-1 ;k++)
    console.log(percentSign+spaceCount);
if else console.log(percentSign + '    '+ '%');
}