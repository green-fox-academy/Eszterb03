// Given a string, compute recursively a new string where all the 'x' chars have been removed.

let text1: string = 'applexx'

function changealltheX(text: string) {
  let numberofletter: number = text.indexOf('x');
  if (numberofletter === -1) {
    return text;
  }
  else {
    text = text.slice(0,numberofletter);
      return changealltheX(text);
  }
}

 console.log(changealltheX(text1))
