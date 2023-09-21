const _ = require('lodash');

const shufflePhotos = (photos) => {
  let currentIndex = photos.length,
    randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [photos[currentIndex], photos[randomIndex]] = [
      photos[randomIndex],
      photos[currentIndex],
    ];
  }
  return photos;
};

const createTiles = (photos) => {
  const tilePhotos = shufflePhotos([...photos].concat(_.clone(photos)));

  const tiles = [];

  tilePhotos.map((photo) => {
    tiles.push({
      isMatched: false,
      faceUp: false,
      photo: photo,
    });
  });
  return tiles;
};

export { createTiles };
