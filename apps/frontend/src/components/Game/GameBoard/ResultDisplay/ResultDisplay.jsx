import { useGameContext } from '@/hooks/useGameContext';
import { useFormContext } from '@/hooks/useFormContext';
import { usePhotosContext } from '@/hooks/usePhotosContext';
import Button from '@/components/Button';
import { GAME_STAGES } from '@/utils/stages';

const { GAME_OVER } = GAME_STAGES;

const ResultDisplay = () => {
  const {
    gameActions,
    gameState: { winner, currentStage },
    gameDispatch,
  } = useGameContext();

  const { formActions, formDispatch } = useFormContext();
  const { photosActions, photosDispatch } = usePhotosContext();

  const handleReset = () => {
    photosDispatch(photosActions.setPhotos([]));
    gameDispatch(gameActions.resetGame());
    formDispatch(formActions.resetForm());
  };

  const handlePlayAgain = () => {
    gameDispatch(gameActions.resetGame());
  };

  return (
    currentStage === GAME_OVER && (
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
          <div className="container d-flex flex-column pt-3">
            <Button
              handleClick={handlePlayAgain}
              buttonText={'play again'}
              bgColor={'primary-dark'}
              textColor={'primary'}
            />
            <Button
              handleClick={handleReset}
              buttonText={'reset game'}
              bgColor={'primary-dark'}
              textColor={'secondary'}
            />
          </div>
        </div>
      </div>
    )
  );
};

export default ResultDisplay;
