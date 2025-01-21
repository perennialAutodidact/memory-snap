import _ from 'lodash';

/**
 *
 * @param {Array} photos an array for photo objects from the Pexels API
 * @param {Object} options { shuffle: boolean }
 * @returns an array of tile objects
 */
const createTilesFromPhotos = (photos, options = { shuffle: true }) => {
  // create two of each photo
  const tilePhotos = photos.flatMap((photo) => [photo, photo]);

  let matchId = 0;
  const tiles = tilePhotos.map((photo, index) => {
    if (index % 2 === 0 && index > 0) matchId++;

    return {
      index,
      id: index,
      matchId,
      isMatched: false,
      faceUp: false,
      isFlippable: true,
      photo: {
        ...photo,
        altText: `tile-${index}: ${photo.alt}`,
      },
    };
  });

  return options.shuffle ? _.shuffle(tiles) : tiles;
};

export { createTilesFromPhotos };
