import React from 'react';
import TileGrid from './GameBoard/TileGrid';
import useGameContext from 'hooks/useGameContext';

const Game = () => {
  const {
    state: { tiles },
  } = useGameContext();

  return (
    <section aria-label="memory snap game">
      Game
      <TileGrid tiles={tiles} />
    </section>
  );
};

export default Game;
