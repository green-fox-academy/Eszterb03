'use strict'

import { readFileSync } from "fs";


function duplicatedChars(fileName: string) {
  let fileContent = readFileSync(fileName, 'utf-8');
  return fileContent.split('\r\n').map(elem => {
    let newLineContent = ''
    for (let i: number = 0; i < elem.length; i++) {
      if (i! % 2 == 0) {
        newLineContent += elem.charAt(i);
      }
    }
    return newLineContent;
  }).join("\r\n");
}

console.log(duplicatedChars('duplicated-chars.txt'))