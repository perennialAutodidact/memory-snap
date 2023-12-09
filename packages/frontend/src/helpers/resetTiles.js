/**
 * takes an array of tiles and returns an array with all is flippable value
 * set to false
 * @param {Array} tiles an array of tile objects from game context
 */
const resetTiles = (tiles) =>
  tiles.map((tile) =>
    tiles[0].id === tile.id || tiles[1].id === tile.id
      ? { ...tile, isMatched: !tile.isMatched }
      : { ...tile, isFlippable: true }
  );

export { resetTiles };
