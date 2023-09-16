import React from 'react';
import usePhotosContext from 'hooks/usePhotosContext';
import TileGrid from './GameBoard/TileGrid';
import useGameContext from 'hooks/useGameContext';
import PlayerHUD from './PlayerHUD';

const Game = () => {
  const {
    // TODO: re-enable eslint when photos variable is used
    // eslint-disable-next-line
    state: {photos}
  } = usePhotosContext();
  const {
    state: { players, currentPlayer, tiles },
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
