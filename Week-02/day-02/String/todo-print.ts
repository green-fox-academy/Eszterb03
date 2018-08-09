'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention
// Expected outpt:
// My todo:
//  - Buy milk
//  - Download games
//      - Diablo
//unshift,concat
let todoText: string = '- Buy milk\n';

let newText: string[] = todoText.split('\n');
//console.log(newText);
newText.unshift('My todo:');
//console.log(newText);
newText.push('-Download games', '     - Diablo');
//console.log(newText);
newText.splice(2, 1);
//console.log(newText);
todoText = newText.join('\r\n');
console.log(todoText);

// let firstRow: string = 'My todo:\n\r'; ctrl k ctrl c, ctrl k ctrl u

// let thirdRow: string = '- Download games';

// let fourRow: string = '  - Diablo';


// function todoText1(inputString: string[])
// inputString.forEach(function (elem: string) {
//     console.log(elem.split(" "));
// })
// };
// todoText1()