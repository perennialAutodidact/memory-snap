import { usePhotosContext } from '@/hooks/usePhotosContext';
import { LOADING_STATUSES } from '@/utils/loadingStatuses';
import Spinner from './Spinner';
import GameBoard from './GameBoard';

const { IDLE, PENDING } = LOADING_STATUSES;

const Game = () => {
  const { fetchedPhotosStatus: status } = usePhotosContext();

  const isLoading = [IDLE, PENDING].includes(status);
  // console.log({status, isLoading})

  return (
    <section
      data-testid="game-container"
      className="d-flex flex-column"
      aria-label="memory snap game"
    >
      {isLoading ? (
        <div className="pt-5 d-flex justify-content-center">
          <Spinner />
        </div>
      ) : (
        <GameBoard />
      )}
    </section>
  );
};

export default Game;
