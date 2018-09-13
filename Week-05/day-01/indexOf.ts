'use strict'



export default function indexOf(numberOfArray, number: number): number {
  for (let index = 0; index < numberOfArray.length; index++) {
    if (numberOfArray[index] === number) {
      return index;
    }
  }
  return 0;
};

