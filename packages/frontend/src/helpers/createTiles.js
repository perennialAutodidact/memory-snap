const _ = require('lodash');

const createTiles = (photos) => {
  const tilePhotos = _.shuffle(photos.flatMap((photo) => [photo, photo]));

  const tiles = tilePhotos.map((photo, index) => ({
    id: index,
    isMatched: false,
    faceUp: false,
    photo: photo,
  }));

  return tiles;
};

export { createTiles };
