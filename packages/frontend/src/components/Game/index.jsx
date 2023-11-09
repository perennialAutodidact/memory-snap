import React from 'react';
import usePhotosContext from 'hooks/usePhotosContext';
import Spinner from './Spinner';
import GameBoard from './GameBoard';

const Game = () => {
  const {
    // TODO: re-enable eslint when photos variable is used
    // eslint-disable-next-line
    state: { error, status, photos },
  } = usePhotosContext();

  const isLoading = ['IDLE', 'PENDING'].includes(status);

  return (
    <section className="d-flex flex-column" aria-label="memory snap game">
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
