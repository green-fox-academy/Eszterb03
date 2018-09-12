
//   1) replace the list items' content with items from this list:
//   ['apple', 'banana', 'cat', 'dog']
//   2) change the <ul> element's background color to 'limegreen'
//     - use css class to change the color instead of the style property


let newList = document.querySelectorAll('li');
for (i = 0; i < newList.length; i++) {
  let listItem = ['apple', 'banana', 'cat', 'dog'];
  newList[i].textContent = listItem[i];
};



let myUls = document.getElementsByTagName('ul');
myUls[0].style.background = 'limegreen';
/*vagy:
myTags[0].setAttribute('style', 'background: yellow');*/


