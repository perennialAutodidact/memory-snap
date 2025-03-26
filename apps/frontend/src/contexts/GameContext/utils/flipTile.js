import { produce } from 'immer';

/**
 * Flips a given tile object and prevents
 * it from being flipped again until it is reset
 * @param {object} state game context object
 * @param {object} tile  the tile object to be flipped
 * @returns game context object with the given tile flipped
 */
const flipTile = (state, tileToFlip) => {
  const { tiles } = state;
  const updatedTiles = tileToFlip.isFlippable
    ? produce(tiles, (draft) => {
        const tileIndex = tiles.all.findIndex(
          (tile) => tile.id === tileToFlip.id,
        );
        draft.all[tileIndex].faceUp = true;
        draft.all[tileIndex].isFlippable = false;
        draft.flipped.push(draft.all[tileIndex]);
      })
    : tiles;
  return updatedTiles;
};

export { flipTile };
