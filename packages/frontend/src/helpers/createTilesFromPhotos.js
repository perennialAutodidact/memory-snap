const _ = require('lodash');

/**
 *
 * @param {Array} photos
 * @param {Object} options
 * @returns an array of tile objects
 */

const createTilesFromPhotos = (photos, options) => {
  let tilePhotos;

  if (options.shuffle === true) {
    tilePhotos = _.shuffle(photos.flatMap((photo) => [photo, photo]));
  } else {
    tilePhotos = photos.flatMap((photo) => [photo, photo]);
  }

  const tiles = tilePhotos.map((photo, index) => ({
    id: index,
    isMatched: false,
    faceUp: false,
    photo: photo,
  }));

  return tiles;
};

export { createTilesFromPhotos };
