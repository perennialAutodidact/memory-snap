import React from 'react';
import useGameContext from 'hooks/useGameContext';

const ResultDisplay = () => {
  const {
    state: { winner },
  } = useGameContext();

  return (
    <div
      data-testid="result-display"
      className="container d-flex justify-content-center pt-5"
    >
      <div className="d-flex-column text-center">
        <h1 className="mb-5">GAME OVER!</h1>

        {winner === null ? (
          <h2 className="lh-lg">Its a tie!</h2>
        ) : (
          <h2 className={`text-${winner.color.className}`}>
            {`${winner.name} wins!`}
          </h2>
        )}
      </div>
    </div>
  );
};

export default ResultDisplay;
