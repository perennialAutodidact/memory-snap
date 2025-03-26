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
    <div
      data-testid="result-display"
      className="container d-flex justify-content-center pt-5"
    >
      <div className="d-flex-column text-center">
        <h1 className="mb-5">GAME OVER!</h1>
        <h2
          className={`lh-lg ${winner ? `text-${winner?.color?.className}` : ''}`}
        >
          {winner ? `${winner.name} wins!` : "It's a tie!"}
        </h2>
        <div className="container d-flex flex-column pt-3">
          <Button
            handleClick={handlePlayAgain}
            buttonText={'Play again'}
            bgColor={'primary'}
            textColor={'light'}
          />
          <a
            onClick={handleReset}
            className={[
              'mt-3 cursor-pointer',
              'link-light link-underline',
              'link-underline-opacity-0 ',
              'link-offset-2-hover link-underline-opacity-75-hover',
            ].join(' ')}
            href="#"
          >
            Reset game
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResultDisplay;
