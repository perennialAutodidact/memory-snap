/**
 * takes an array of tiles and returns an array with all is flippable value
 * set to false
 * @param {Array} tiles an array of tile objects from game context
 */
const lockTiles = (tiles) =>
  tiles.map((tile) => ({ ...tile, isFlippable: false }));

/**
 * takes an array of tiles and returns an array with all is flippable value
 * set true
 * @param {Array} tiles an array of tile objects from game context
 */
const unlockTiles = (tiles) =>
  tiles.map((tile) => ({ ...tile, isFlippable: true }));

export { lockTiles, unlockTiles };
