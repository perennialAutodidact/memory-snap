/**
 * takes an array of tiles
 * @param {Array} tiles an array of tile objects
 * @return {Array} an array of objects with all is flippable values false
 * and face up values false
 */
const resetTiles = (tiles) =>
  tiles.map((tile) => ({ ...tile, isFlippable: true, faceUp: false }));

export { resetTiles };
