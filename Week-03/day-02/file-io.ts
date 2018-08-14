declare function require(path: string): any;
export { };

const fs = require('fs');
const charEndcoding = 'utf-8'

function readFromFile(fileName: string): string {
    try {
        return fs.readFileSync(fileName, charEndcoding)
    } catch (e) {
        console.log(e.message);
        return null;
    }
}

function writeToAFile(fileName: string, data: any): void {
    fs.writeFileSync(fileName, data)
}

function CountA(char: string): number {
    let result: number = 0
    const fileContent: string = readFromFile('hello.txt');
    if (fileContent !== null) {
        fileContent.split('\r\n').forEach(element => {
            element.split('').forEach(elem => {
                if (elem === char) {
                    result++;  // mindig adjon hozzá egyet 
                }
            });
        });
        writeToAFile('result.txt', result)
        return result;
        //console.log(fileContent.split('\r\n'));
    }
}

console.log(CountA("a"));

// writeToAFile('hel.txt','hello coffee')
// console.log(readFromFile('hello.txt'));
