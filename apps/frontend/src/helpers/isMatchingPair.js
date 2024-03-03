/**
 * takes an array of tiles and returns a boolean
 * @param {Array} tiles an array of tile objects
 */
const isMatchingPair = (tiles) => {
  return tiles[0].photo.id === tiles[1].photo.id;
};

export { isMatchingPair };
