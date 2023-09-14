import React from 'react';
import usePhotosContext from 'hooks/usePhotosContext';
import Tile from './GameBoard/Tile';
import ScoreBoard from './ScoreBoard';
import useGameContext from 'hooks/useGameContext';

const Game = () => {
  const {
    // TODO: re-enable eslint when photos variable is used
    // eslint-disable-next-line
    state: { photos },
  } = usePhotosContext();

  const {
    state: { players },
  } = useGameContext();

  return (
    <section aria-label="memory snap game">
      <ScoreBoard players={players} />
      Game
      <Tile />
    </section>
  );
};

export default Game;
