import React from 'react';
import useGameContext from 'hooks/useGameContext';
import useFormContext from 'hooks/useFormContext';
import Button from 'components/Button';
import { resetGame } from '../../../../contexts/game/actions/';
import { resetForm } from 'contexts/form/actions';

const ResultDisplay = () => {
  const {
    state: { winner, stage },
    dispatch,
  } = useGameContext();

  const formValues = useFormContext();

  const handleReset = () => {
    dispatch(resetGame());
    formValues.dispatch(resetForm());
  };

  return (
    stage === 2 && (
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
          <Button onClick={handleReset} text={'reset game'} color={'primary'} />
        </div>
      </div>
    )
  );
};

export default ResultDisplay;
