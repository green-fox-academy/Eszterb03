'use strict';

window.onload = () => {
  const form = document.querySelector('#formHandler');
  const cat = document.querySelector('#cat');
  const dog = document.querySelector('#dog');
  const loveCatButton = document.querySelector('#catbutton');
  if (loveCatButton) {
    loveCatButton.disabled = true;
  }
  const signUp = document.querySelector('#signup');
  if (signUp) {
    signUp.disabled = true;
  }

  cat.addEventListener('click', (event) => {
    if (event.selected) {
      signUp.disabled = false;
    }
  });

}