import { produce } from "immer";

/**
 * Flips a given tile object and prevents
 * it from being flipped again until it is reset
 * @param {object} state game context object
 * @param {object} tile  the tile object to be flipped
 * @returns game context object with the given tile flipped
 */
const flipTile = (state, tileToFlip) => {
  const { tiles } = state;
  return produce(tiles, (draft) => {
    const tileIndex = tiles.findIndex((tile) => tile.id === tileToFlip.id);
    draft[tileIndex].faceUp = true;
    draft[tileIndex].isFlippable = false;
  });
};

export { flipTile };
