import React, { useEffect, useRef } from 'react';
import { useGameContext } from 'hooks/useGameContext';
import ScoreBoard from 'components/Game/ScoreBoard';
import TileGrid from './TileGrid/TileGrid';

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
