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
// longest word(s)
function longestWord(fileName) {
  let fileContent: string = readFromFile(fileName);
  let fileSplit = fileContent.split('\r\n').join('');
  let fileSplitted = fileSplit.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/g, '').split(' ');
  let longestWord: number = fileSplitted.sort(function (a, b) { return b.length - a.length })[0].length;
  let longestWordsArray: string[] = [];
  fileSplitted.forEach(element => {
    if (element.length == longestWord) {
      longestWordsArray.push(element)
    }
  }); return longestWordsArray
}
console.log(longestWord('poem.txt'))


// avarge word length
function avarageWord(fileName) {
  let fileContent: string = readFromFile(fileName);
  let fileSplit = fileContent.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/g, '').split('\r\n').join().split(' ');

  let avarageNum: number = 0;
  for (let i: number = 0; i < fileSplit.length; i++) {
    avarageNum += fileSplit[i].length
  }
  return avarageNum / fileSplit.length
}

console.log(avarageWord('poem.txt'))


function fourLongWord(fileName) {
  let fileContent: string = readFromFile(fileName);

  
}