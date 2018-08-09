'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!
let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';

function revMystring(outString: any) {
    let newString = outString.split("");
    let everseArray = newString.reverse();
    let joinArray = everseArray.join("");
    return joinArray;
}
console.log(revMystring(reversed));


