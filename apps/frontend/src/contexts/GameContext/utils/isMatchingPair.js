/**
 * Checks if two tiles match one another
 * @param {Array} tiles array of tile objects
 * @returns boolean indicating if the provided tiles match
 */
const isMatchingPair = (tiles) =>
  !!(tiles.length && tiles[0].matchId === tiles[1].matchId);

export { isMatchingPair };
