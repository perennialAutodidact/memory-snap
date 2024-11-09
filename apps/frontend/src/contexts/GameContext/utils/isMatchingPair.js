/**
 * Checks if two tiles match one another
 * @param {Array} tiles array of tile objects
 * @returns boolean indicating if the provided tiles have the same image id
 */
const isMatchingPair = tiles =>
  !!(tiles?.length && tiles[0].photo.id === tiles[1].photo.id);

export { isMatchingPair };
