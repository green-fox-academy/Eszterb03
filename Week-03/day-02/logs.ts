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
function logmessage(fileTxt:any){
        const contentFile :any[] = readFromFile(fileTxt).split('\r\n');
    // } catch(error) {}
}
logmessage('log.txt')