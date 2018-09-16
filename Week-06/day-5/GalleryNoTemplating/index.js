const picture = [
  { URL: 'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=350', header: 'Beautiful Tree', text: 'Trees in the nordic landscape' },
  { URL: 'http://www.smd.qmul.ac.uk/media/smd/study-malta-slide.jpg', header: 'Malta', text: 'Queen Mary University of London' },
  { URL: 'https://render.fineartamerica.com/images/images-profile-flow/350/images-medium/garden-seating-mike-rivera.jpg', header: 'Glade', text: 'Garden seating' },
  { URL: 'https://render.fineartamerica.com/images/images-profile-flow/350/images/artworkimages/medium/1/loafers-lake-irfan-gillani.jpg', header: 'Lake', text: 'Lake in Idaho' }

]

let rightButton = document.querySelector('.buttonright');
let leftButton = document.querySelector('.buttonleft');
let counter = 0;

document.querySelector('.picture').src = picture[0].URL
document.querySelector('.header').innerHTML = picture[0].header;
document.querySelector('.text').innerHTML = picture[0].text;

rightButton.addEventListener('click', () => {
  counter++;
  if (counter === picture.length) {
    counter = 0;
  }
  document.querySelector('.picture').src = picture[counter].URL;
  document.querySelector('.header').innerHTML = picture[counter].header;
  document.querySelector('.text').innerHTML = picture[counter].text;
}
);

leftButton.addEventListener('click', () => {
  counter--;
  if (counter === -1) {
    counter = picture.length - 1;
  }
  document.querySelector('.picture').src = picture[counter].URL;
  document.querySelector('.name').innerHTML = picture[counter].name;
  document.querySelector('.quote').innerHTML = picture[counter].quote;
}

);