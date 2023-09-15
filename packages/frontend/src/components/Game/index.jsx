import React from 'react';
import usePhotosContext from 'hooks/usePhotosContext';
import Tile from './GameBoard/Tile';
import PlayerHUD from './PlayerHUD';
import useGameContext from 'hooks/useGameContext';

const Game = () => {
  const {
    // TODO: re-enable eslint when photos variable is used
    // eslint-disable-next-line
    state: { status, photos },
  } = usePhotosContext();

  const {
    state: { players, currentPlayer },
  } = useGameContext();

  return (
    <section aria-label="memory snap game">
      <PlayerHUD player={players[currentPlayer]} />
      Game
      <Tile />
    </section>
  );
};

export default Game;
