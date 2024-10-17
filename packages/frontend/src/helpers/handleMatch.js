/**
 * takes an array of tiles and an array of flipped tiles and returns
 * an array with the flipped tiles isMatched value set to true and
 * the remaining tiles isFlippable value set to true
 * @param {Array} tiles an array of tile objects
 * @param {Array} flipped an array of two tile objects
 */
const handleMatch = (tiles, flipped) => {
  return tiles.map(tile =>
    flipped[0].id === tile.id || flipped[1].id === tile.id
      ? { ...tile, isMatched: true }
      : { ...tile, isFlippable: true }
  );
};

export { handleMatch };
