// // Open a file called 'my-file.txt'
// // Write your name in it as a single line
// // If the program is unable to write the file,
// // then it should print an error message like: 'Unable to write file: my-file.txt'

'use srtict';
​
export {};
​
declare function require(path:string): any;
const fs = require('fs');
​
const fileWrite = (path, content) => {
 try {
  fs.writeFileSync(path, content);
 } catch (error) {
  console.log(error.message);
 }
}
​
const canWrite = (path:string): boolean => {
 try {
  fs.accessSync(path, fs.constants.W_OK);
  return true;
 } catch (error) {
  return false;
 }
}
​
if ( canWrite('file3.txt')) {
 fileWrite('file3.txt', 'halika');
} else {
 console.log('Unable to write file: my-file.txt');
} 
