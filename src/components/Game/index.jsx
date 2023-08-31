import React from 'react';
import useFetchedPhotos from 'hooks/useFetchedPhotos';

const Game = () => {
  const { photos } = useFetchedPhotos({ query: 'cats', perPage: 5 });
  return (
    <section aria-label="memory snap game">
      Game
      <pre>{JSON.stringify(photos, null, 2)}</pre>
    </section>
  );
};

export default Game;
