'use strict'

const express = require('express');
const app = express();
const PORT = 3030;


const picture = [
  { URL: 'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=350', header: 'Beautiful Tree', text: 'Trees in the nordic landscape' },
  { URL: 'http://www.smd.qmul.ac.uk/media/smd/study-malta-slide.jpg', header: 'Malta', text: 'Queen Mary University of London' },
  { URL: 'https://render.fineartamerica.com/images/images-profile-flow/350/images-medium/garden-seating-mike-rivera.jpg', header: 'Glade', text: 'Garden seating' },
  { URL: 'https://render.fineartamerica.com/images/images-profile-flow/350/images/artworkimages/medium/1/loafers-lake-irfan-gillani.jpg', header: 'Lake', text: 'Lake in nowhere' }

]

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));


app.get('/', (req, res) => {
  res.render('index', {
    picture,
  });
});

app.listen(PORT, () => {
  console.log(`the server is u an running port ${PORT}`)
});