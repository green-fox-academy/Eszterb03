// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.

let inputText: string = 'hexxaaa';


function changetoY(text: string, replaceX: string, replacetoY: string) {
  let n: number = (text.indexOf(replaceX));
  if (n === -1) {
    return text;
  }
  else {
    let newText = text.replace(replaceX, replacetoY);
    return changetoY(newText,replaceX,replacetoY);
  }

}
console.log(changetoY(inputText, 'x', 'y'))
