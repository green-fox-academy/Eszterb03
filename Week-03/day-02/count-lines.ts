// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

declare function require(path: string): any;
export { };
'use string'

const charEndcoding = 'utf-8'
const fs = require('fs');

function readFromFile(fileName: string): string {
    try {
        return fs.readFileSync(fileName, charEndcoding)
    } catch (e) {
        console.log(e.message);
        return null;
    }
}

function numberLines(filename: string): any {
    try {
        let result: number = 0;
        const fileContent: any[] = readFromFile(filename).split('\r\n');
        fileContent.forEach(elem => {
           // console.log(elem)
           //\r\n már megtörtem most csak megszámoltatom a numberrel
               result++ 
        });
        return result
    } catch (error) {
        return null
    };
};
console.log(numberLines('my-file.txt'))