/**
 * takes an array of player and the current player
 * @param {Array} players an array of player objects
 * @param {Object} currentPlayer a player object
 * @returns the player array with the current player's score incremented by one
 */

const awardPoint = (players, currentPlayer) => {
  return players.map((player) =>
    player.number === currentPlayer.number
      ? { ...player, score: players[currentPlayer.number - 1].score + 1 }
      : { ...player }
  );
};

export { awardPoint };
