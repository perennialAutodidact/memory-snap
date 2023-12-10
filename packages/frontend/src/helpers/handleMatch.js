/**
 * takes an array of tiles and returns an array with all is flippable value
 * set to false
 * @param {Array} tiles an array of tile objects from game context
 */
const handleMatch = (tiles, flipped) => {
  return tiles.map((tile) =>
    flipped[0].id === tile.id || flipped[1].id === tile.id
      ? { ...tile, isMatched: true }
      : { ...tile, isFlippable: true }
  );
};

export { handleMatch };
