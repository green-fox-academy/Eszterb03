// Write a program that opens a file called 'my-file.txt', then prints
// each of lines form the file.
// If the program is unable to read the file (for example it does not exists),
// then it should print an error message like: 'Unable to read file: my-file.txt'

declare function require(path: string): any;
export { };
'use string'

const charEndcoding = 'utf-8'
const fs = require('fs');


function readFromfile(fileName: string)  {
    // ha ez a file létezik, nyissa meg az if függvény az egy try
    try {
       if (fs.existsSync(fileName, charEndcoding)){
            let result = (fs.readFileSync(fileName, charEndcoding))
            console.log(result.split('\r\n'))
        }
    else {
            throw new Error('Unable to read file: my-file.txt');
        }
    }
    catch (e) {
        console.log(e.message);
    }
}
readFromfile("my-file.txt")




// function printsLine(char: string): any {
//     let result: number = 0,
//     const fileContent: string = readFromfile('my-file.txt');
//     if (fileContent !== null) {
//         fileContent.split('\r\n').forEach(element => {
//             if (element === char) {
//                 result++
//             }
//         });
//     }
// }
// console.log(printsLine("valami.txt"))