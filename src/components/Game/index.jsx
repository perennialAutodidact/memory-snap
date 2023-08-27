import React from 'react';

const Game = () => {
  return (
    <section aria-label="memory snap game">
      Game
      <pre>{JSON.stringify(photos, null, 2)}</pre>
    </section>
  );
};

export default Game;
