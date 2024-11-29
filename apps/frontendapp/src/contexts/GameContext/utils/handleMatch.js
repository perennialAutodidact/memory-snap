import { produce } from "immer";
/**
 * takes an array of tiles and an array of flipped tiles and returns
 * an array with the flipped tiles isMatched value set to true and
 * the remaining tiles isFlippable value set to true
 * @param {Array} tiles an array of tile objects
 * @param {Array} flipped an array of tile objects with the flipped tiles marked as either matched or flippable
 */
const handleMatch = (tiles, flipped) => {
  const flippedTileIds = flipped.map(({ id }) => id);
  return tiles.map((tile) =>
    flippedTileIds.includes(tile.id)
      ? { ...tile, isMatched: true }
      : { ...tile, isFlippable: true },
  );
};

export { handleMatch };
