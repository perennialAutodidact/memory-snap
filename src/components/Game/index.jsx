import React from 'react';
import usePhotosContext from 'hooks/usePhotosContext';

const Game = () => {
  const {
    state: { photos },
  } = usePhotosContext();

  return (
    <section aria-label="memory snap game">
      Game
      <pre>{JSON.stringify(photos, null, 2)}</pre>
    </section>
  );
};

export default Game;
