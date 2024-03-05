import React from 'react';
import useGameContext from 'hooks/useGameContext';
import ScoreBoard from '../ScoreBoard';
import TileGrid from './TileGrid';

const GameBoard = () => {
  const {
    state: { players, currentPlayer, tiles },
  } = useGameContext();

  return (
    <>
      <ScoreBoard players={players} currentPlayer={currentPlayer} />
      <TileGrid tiles={tiles} />
    </>
  );
};

export default GameBoard;
