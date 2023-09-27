import React from 'react';
import usePhotosContext from 'hooks/usePhotosContext';
import ScoreBoard from './ScoreBoard';
import TileGrid from './GameBoard/TileGrid';
import useGameContext from 'hooks/useGameContext';

const Game = () => {
  const {
    // TODO: re-enable eslint when photos variable is used
    // eslint-disable-next-line
    state: { photos }
  } = usePhotosContext();
  const {
    state: { players, currentPlayer, tiles },
  } = useGameContext();
  return (
    <section aria-label="memory snap game">
      <ScoreBoard players={players} currentPlayer={currentPlayer} />
      <TileGrid tiles={tiles} />
    </section>
  );
};

export default Game;
