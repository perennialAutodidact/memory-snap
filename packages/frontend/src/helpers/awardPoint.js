import { produce } from 'immer';
/**
 * takes an array of players and the playerIndex
 * @param {Array} players an array of player objects
 * @param {Number} playerIndex a player index
 * @returns the player array with the current player's score incremented by one
 */
const awardPoint = (players, playerIndex) => {
  const player = players[playerIndex];
  return produce(players, draft => {
    draft[playerIndex].score = player.score + 1;
  });
};

export { awardPoint };
