import { writeFileSync } from "fs";

'use strict'

const fs = require('fs');

function readFromFile(fileName: string): string {
  try {
    return fs.readFileSync(fileName, 'utf-8')
  } catch (e) {
    console.log(e.message);
    return null;
  }
}

function sumOfNumber(filename: string) {
  let fileContent: string[] = readFromFile(filename).split('\r\n');
  let numbersList: string[] = [];
  fileContent.forEach(element => {
    let splitElem: string[] = element.split(' ');
    numbersList = numbersList.concat(splitElem);
  });
  let myNumber: number[] = numbersList.map(value => parseInt(value));
  let finalSum = myNumber.reduce(function (prevValue, nextValue) { return prevValue + nextValue},0);
  fs.writeFileSync('testsum.txt',`Sum of the numbers : ${finalSum}`);
  console.log(finalSum)

}

sumOfNumber('testread.txt');

//whitespace