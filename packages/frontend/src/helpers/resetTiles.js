/**
 * takes an array of tiles and returns an array with all is flippable value
 * set to false and face up value set to false
 * @param {Array} tiles an array of tile objects
 */
const resetTiles = (tiles) =>
  tiles.map((tile) => ({ ...tile, isFlippable: true, faceUp: false }));

export { resetTiles };
