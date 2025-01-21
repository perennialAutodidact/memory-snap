/**
 * takes an array of tiles and an array of flipped tiles and returns
 * an array with the flipped tiles isMatched value set to true and
 * the remaining tiles isFlippable value set to true
 * @param {Array} tiles an array of tile objects
 * @param {Array} flipped an array of tile objects with the flipped tiles marked as either matched or flippable
 * @returns array of tiles with the two flipped tiles indicating that they are matched
 */
const handleMatch = (tiles, flipped) => {
  const flippedTileIndices = flipped.map(({ index }) => index);
  return tiles.map((tile) =>
    flippedTileIndices.includes(tile.index)
      ? { ...tile, isMatched: true }
      : tile,
  );
};

export { handleMatch };
