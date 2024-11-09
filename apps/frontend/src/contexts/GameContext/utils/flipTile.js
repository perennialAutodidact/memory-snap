/**
 * Flips a given tile object and prevents
 * it from being flipped again until it is reset
 * @param {object} state game context object
 * @param {object} action action object containing the tile object to be flipped
 * @returns game context object with the given tile flipped
 */
const flipTile = (state, action) =>
  state.tiles.map(tile =>
    action.payload.tile.id === tile.id
      ? { ...tile, faceUp: true, isFlippable: false }
      : tile
  );

export { flipTile };
