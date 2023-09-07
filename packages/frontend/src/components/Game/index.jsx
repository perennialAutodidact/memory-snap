import React from 'react';
import usePhotosContext from 'hooks/usePhotosContext';
import Tile from './GameBoard/Tile';

const Game = () => {
  const {
    state: { photos },
  } = usePhotosContext();

  console.log({ photos });

  return (
    <section aria-label="memory snap game">
      Game
      <Tile />
    </section>
  );
};

export default Game;
