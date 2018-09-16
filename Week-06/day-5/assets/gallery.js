
(function () { //ez az closure
  let position = 0;
  let imageContainer = document.querySelector('.imgcontainer');
  let imageHolders = imageContainer.querySelectorAll('.imgholder');

  let onGalleryNavigate = function (direction) {
    position = Math.max(0, Math.min(position + direction, imageHolders.length - 1));
    navigateToPosition(position);
  };

  let navigateToPosition = function (position) {
    imageContainer.style['transform'] = 'translate3d(-' + position * (100 / imageHolders.length) + '%, 0, 0)'

  }

  let thumbNails = document.querySelectorAll('.thumbnail img');

  Array.prototype.map.call(thumbNails, (elem, index) => {
    elem.addEventListener('click', () => {
      navigateToPosition(index)
    })
  });

  document.querySelector('.button1').addEventListener('click', () => {
    onGalleryNavigate(-1)
  });

//   document.querySelector('.button2').addEventListener('click', () => {
//     onGalleryNavigate(1)
//   });
// })();
