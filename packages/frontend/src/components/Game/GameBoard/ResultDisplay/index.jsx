import React from 'react';
import useGameContext from 'hooks/useGameContext';
import useFormContext from 'hooks/useFormContext';
import usePhotosContext from 'hooks/usePhotosContext';
import Button from 'components/Button';
import { resetGame, updateStage } from '../../../../contexts/game/actions/';
import { resetForm } from 'contexts/form/actions';
import { resetPhotos } from 'contexts/photos/actions';

const ResultDisplay = () => {
  const {
    state: { winner, stage },
    dispatch: gameDispatch,
  } = useGameContext();
  const { dispatch: formDispatch } = useFormContext();
  const { dispatch: photoDispatch } = usePhotosContext();
  const handleReset = () => {
    photoDispatch(resetPhotos());
    gameDispatch(resetGame());
    formDispatch(resetForm());
  };

  const handlePlayAgain = () => {
    gameDispatch(resetGame());
    gameDispatch(updateStage(1));
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
            <h2>Its a tie!</h2>
          ) : (
            <h2 className={`text-${winner.color.className}`}>
              {winner.name + ' '}
               wins!
            </h2>
          )}
          <div className="container d-flex flex-column pt-5">
            <Button
              onClick={handlePlayAgain}
              text={'Play again'}
              color={'primary'}
              textColor={'primary-dark'}
            />
            <div className="pt-3"></div>
            <Button
              onClick={handleReset}
              text={'Reset game'}
              color={'primary-dark'}
              textColor={'secondary'}
            />
          </div>
        </div>
      </div>
    )
  );
};

export default ResultDisplay;
