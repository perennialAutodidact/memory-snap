import * as _ from 'lodash';

/**
 *
 * @param {Array} photos an array for photo objects from the Pexels API
 * @param {Object} options { shuffle: boolean }
 * @returns an array of tile objects
 */
const createTilesFromPhotos = (photos, options = { shuffle: true }) => {
  const tilePhotos = photos.flatMap(photo => [photo, photo]);

  const tiles = tilePhotos.map((photo, index) => ({
    id: index,
    isMatched: false,
    faceUp: false,
    isFlippable: true,
    photo: photo,
  }));

  return options.shuffle ? _.shuffle(tiles) : tiles;
};

export { createTilesFromPhotos };
