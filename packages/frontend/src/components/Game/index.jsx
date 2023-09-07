import React from 'react';
import usePhotosContext from 'hooks/usePhotosContext';
import Tile from './GameBoard/Tile';
import PlayerHUD from './PlayerHUD';
import useGameContext from 'hooks/useGameContext';

const Game = () => {
  const {
    state: { photos },
  } = usePhotosContext();

  return (
    <section aria-label="memory snap game">
      <PlayerHUD player={players[currentPlayer]} />
      Game
      <Tile />
    </section>
  );
};

export default Game;
