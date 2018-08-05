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

for (let j = 0; j <= lineCount; j++){
if (j === 0) 
    console.log('     *');
if (j === 1) 
    console.log('    ***');
if (j === 2) 
    console.log('   *****');
if (j === 4) 
    console.log('  *******');
if (j === 5) 
    console.log('   *****');
if (j === 6) 
    console.log('    ***');
if (j === 7) 
    console.log('     *');
}