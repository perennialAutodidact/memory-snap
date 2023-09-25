import React from 'react';
import usePhotosContext from 'hooks/usePhotosContext';
import Tile from './GameBoard/Tile';
import ScoreBoard from './ScoreBoard';
import TileGrid from './GameBoard/TileGrid';
import useGameContext from 'hooks/useGameContext';
import PlayerHUD from './PlayerHUD';

const Game = () => {
  const {
    // TODO: re-enable eslint when photos variable is used
    // eslint-disable-next-line
    state: { photos }
  } = usePhotosContext();
  const {
    state: { players, currentPlayer, tiles },
  } = useGameContext();
  console.log(tiles, 'tiles from GAME COMPONENT');
  return (
    <section aria-label="memory snap game">
      <ScoreBoard players={players} currentPlayer={currentPlayer} />
      <TileGrid tiles={tiles} />
    </section>
  );
};

export default Game;
