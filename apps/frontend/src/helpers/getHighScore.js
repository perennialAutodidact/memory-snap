/**
 * takes an array of players
 * @param {Array} players an array of player objects
 * @returns {Number} the highest score
 */
const getHighScore = (players) => {
  let highScore = 0;

  for (let player of players) {
    if (player.score > highScore) {
      highScore = player.score;
    }
  }
  return highScore;
};

export { getHighScore };
