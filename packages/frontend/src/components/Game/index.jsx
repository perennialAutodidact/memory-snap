import React from 'react';
import usePhotosContext from 'hooks/usePhotosContext';
import Tile from './GameBoard/Tile';

const Game = () => {
  const {
    state: { photos },
  } = usePhotosContext();

  return (
    <section aria-label="memory snap game">
      Game
      <pre>{JSON.stringify(photos, null, 2)}</pre>
      <Tile />
    </section>
  );
};

export default Game;
