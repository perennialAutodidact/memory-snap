import React, { useEffect } from 'react';
import usePhotosContext from 'hooks/usePhotosContext';
import TileGrid from './GameBoard/TileGrid';

const Game = () => {
  const {
    state: { photos },
  } = usePhotosContext();

  return (
    <section aria-label="memory snap game">
      Game
      <pre>{JSON.stringify(photos, null, 2)}</pre>
      <TileGrid />
    </section>
  );
};

export default Game;
