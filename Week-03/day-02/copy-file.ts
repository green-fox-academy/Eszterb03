// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful
'use srtict';

export { };

declare function require(path: string): any;
const fs = require('fs');
​const charEndcoding = 'utf-8'


const fileWrite = (path, content) => {
    try {
        fs.writeFileSync(path, content);
    } catch (error) {
        console.log(error.message);
    }
}
fileWrite('newfilefrom.txt', 'copy this text')
fileWrite('newfileto.txt', 'empty now')

function copier(fileFrom: string, fileTo: string): boolean {
    try {
        let content: string = fs.readFileSync(fileFrom, charEndcoding)
        fileWrite(fileTo, content)
    }
    catch (error) {
        return false
    }
    return true
}
copier('newfilefrom.txt', 'newfileto.txt')