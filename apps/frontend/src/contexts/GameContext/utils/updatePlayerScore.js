import { produce } from 'immer';
/**
 * Increments the current player's score
 * @param {Array} currentPlayer the currently active player
 * @param {Number} allPlayers
 * @returns Player array with the current player's score incremented
 */
export const updatePlayerScore = (currentPlayer, allPlayers) =>
  produce(allPlayers, draft => {
    draft[currentPlayer.index].score++;
  });
