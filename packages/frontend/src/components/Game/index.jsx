import React from 'react';
import usePhotosContext from 'hooks/usePhotosContext';
import ScoreBoard from './ScoreBoard';
import TileGrid from './GameBoard/TileGrid';
import useGameContext from 'hooks/useGameContext';
import Spinner from './Spinner';

const Game = () => {
  const {
    state: { currentPlayer, players },
  } = useGameContext();

  const {
    // TODO: re-enable eslint when photos variable is used
    // eslint-disable-next-line
    state: { error, status, photos },
  } = usePhotosContext();
  const {
    state: { players, currentPlayer },
  } = useGameContext();
  
  const isLoading = ['IDLE', 'PENDING'].includes(status);

  return (
    <section className="d-flex flex-column" aria-label="memory snap game">
      {isLoading ? (
        <div className="pt-5 d-flex justify-content-center">
          <Spinner />
        </div>
      ) : (
        <>
          <ScoreBoard players={players} currentPlayer={currentPlayer} />
          <TileGrid photos={photos} />
        </>
      )}
    </section>
  );
};

export default Game;
