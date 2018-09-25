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

  const scrollTreshold = 300;

  const createDiv = () => {
    for (let i = 0; i < getRandomDiv(); i++) {
      const newDiv = document.createElement('div');
      newDiv.classList.add('randomDiv');
      divParent.appendChild(newDiv);
      newDiv.style.backgroundColor = getRandomColor()
    };
  };

  createDiv();

  //   window.onscroll = function () { scrollDiv() }

  //   const scrollDiv = () => {
  //     if (document.body.scrollTop > scrollTreshold || document.documentElement.scrollTop > scrollTreshold) {
  //       createDiv();
  //     }
  //   }
  // };


  document.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - scrollTreshold) {
      createDiv()
    }
  })
};