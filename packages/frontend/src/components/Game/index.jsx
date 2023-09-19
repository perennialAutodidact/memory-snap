import React from 'react';
import usePhotosContext from 'hooks/usePhotosContext';
import Tile from './GameBoard/Tile';
import ScoreBoard from './ScoreBoard';
import useGameContext from 'hooks/useGameContext';
import Spinner from './Spinner';

const Game = () => {
  const {
    // TODO: re-enable eslint when photos variable is used
    // eslint-disable-next-line
    state: { status, photos },
  } = usePhotosContext();

  const {
    state: { players, currentPlayer },
  } = useGameContext();

  console.log({ status });

  return (
    <section className="d-flex flex-column" aria-label="memory snap game">
      {status === 'PENDING' ? (
        <Spinner />
      ) : (
        <>
          <ScoreBoard players={players} currentPlayer={currentPlayer} />
          <Tile />
        </>
      )}
    </section>
  );
};

export default Game;
