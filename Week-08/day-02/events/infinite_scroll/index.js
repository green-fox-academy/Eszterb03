window.onload = () => {
  const divParent = document.querySelector('.container')

  const getRandomDiv = () => {
    return Math.floor(Math.random() * 25);
  };

  const getRandom = () => {
    return Math.floor(Math.random() * 255);
  };

  const getRandomColor = () => {
    return `rgb(${getRandom()},${getRandom()},${getRandom()})`;
  };

  for (let i = 0; i < getRandomDiv(); i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('randomDiv');
    divParent.appendChild(newDiv);
    newDiv.style.backgroundColor = getRandomColor()
  };
};