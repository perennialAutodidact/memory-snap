import React from 'react';
import TileGrid from './GameBoard/TileGrid';
import useGameContext from 'hooks/useGameContext';
import PlayerHUD from './PlayerHUD';

const Game = () => {
  const {
    // TODO: re-enable eslint when photos variable is used
    // eslint-disable-next-line
    state: { tiles },
  } = useGameContext();

  const {
    state: { players, currentPlayer },
  } = useGameContext();

  return (
    <section aria-label="memory snap game">
      <PlayerHUD player={players[currentPlayer]} />
      Game
      <TileGrid tiles={tiles} />
    </section>
  );
};

export default Game;
