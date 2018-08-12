'use strict';
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"
let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];
export = checkNums


let x: number[] = [4, 8, 12, 16]

function checkNums(listofnum: any[]) {
    let result: boolean = false;  //value of an empty string is false, that's why an "empty" boolean must be false too

    if (listofnum.indexOf(4) > -1 && listofnum.indexOf(8) > -1 && listofnum.indexOf(12) > -1
        && listofnum.indexOf(16) > -1) {
        return result = true;
    }
    else {
        return result = false;
    }
    // if (listofnum.includes(4) && listofnum.includes(8) && listofnum.includes(12) && listofnum.includes(16)
    // ) { return element }

};

console.log(checkNums(listOfNumbers))
