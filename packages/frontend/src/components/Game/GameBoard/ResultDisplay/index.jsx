import React from 'react';
import useGameContext from 'hooks/useGameContext';

const ResultDisplay = () => {
  const { state } = useGameContext();

  let highScore = 0;

  state.players.forEach((player) =>
    player.score > highScore ? (highScore = player.score) : ''
  );

  //use map for this instead
  let highScoreArray = [];
  state.players.forEach((player) =>
    player.score === highScore ? highScoreArray.push(player) : ''
  );

  return (
    <div
      data-testid="result-display"
      className="container d-flex justify-content-center mt-5"
    >
      <div className="d-flex-column text-center">
        <h1 className="mb-5">GAME OVER!</h1>

        {highScoreArray.length > 1 ? (
          <h2 className="lh-lg">Its a tie!</h2>
        ) : (
          <h2 className={`text-${highScoreArray[0].color.className}`}>
            {`${highScoreArray[0].name} wins!`}
          </h2>
        )}
      </div>
    </div>
  );
};

export default ResultDisplay;
