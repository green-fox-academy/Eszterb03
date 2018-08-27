'use strict'

/** 
 * Create and test a function called `getTrickyAvg` that takes a number array as parameter
 * and returns the average of the smallest odd(páratlan) and largest even.
 *  - use only basic control flow statements, like 'for', 'if', etc.
 *  - do not use built-in methods like 'filter', 'forEach', 'map', etc.
 *  - write test for 2 different scenarios (test file: tricky-average.spec.ts)
 * 
 * Example cases:
 *   [1, 2, 3] -> should return 1.5
 *   [3, 4, 5, 6] -> should return 4.5
 *   [5, 2, 8, -1] -> should return 3.5
 */
'use strict';

let testNumberArry = [3, 4, 5, 6];
let testNumberArry2 = [1, 2, 3];
let testNumberArry3 = [1, 4];


function getTrickyAvg(numberOfAvg: number[] = []):number {
  let smallestOddNum = numberOfAvg[0];
  let largestEvenNum = numberOfAvg[0];

  for (let i = 1; i < numberOfAvg.length; i++) {

    if (numberOfAvg[i] % 2 === 0 && numberOfAvg[i] > largestEvenNum) {
      largestEvenNum = numberOfAvg[i];
    }

    else if (numberOfAvg[i] % 2 !== 0 && numberOfAvg[i] < smallestOddNum) {
      smallestOddNum = numberOfAvg[i];
    }
  }
  return((smallestOddNum + largestEvenNum) / 2);
}

console.log(getTrickyAvg(testNumberArry));
console.log(getTrickyAvg(testNumberArry2));
console.log(getTrickyAvg(testNumberArry3));


/********************************
 * Do not modify the code below *
 ********************************/
export default getTrickyAvg;