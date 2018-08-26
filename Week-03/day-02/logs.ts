// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.
// ip address regular expression, arrayt csinálok belőle és kiíratom az indexof-besliceolod
'use srtict';

export { };

declare function require(path: string): any;
const fs = require('fs');
​const charEndcoding = 'utf-8'

function readFromFile(fileName: string): string {
    try {
        return fs.readFileSync(fileName, charEndcoding)
    } catch (e) {
        console.log(e.message);
        return null;
    }
}


function logmessage(fileTxt: string): string[] {
    const contentFile: string = readFromFile(fileTxt);
    let ipAddress = contentFile.match(/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/g)
    return ipAddress.filter(function (item, index, filteredIp) { return filteredIp.indexOf(item) === index; });
}
console.log(logmessage('log.txt'))

function getRatio(fileTxt: string): number {
    const contentFile: string = readFromFile(fileTxt);
    let numberofPost = contentFile.match(/POST/g).length;
    let numberOfGet = contentFile.match(/GET/g).length;
    return numberOfGet / numberofPost;
}
console.log(getRatio('log.txt'))