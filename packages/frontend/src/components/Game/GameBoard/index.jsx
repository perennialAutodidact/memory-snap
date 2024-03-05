import React from 'react';
import useGameContext from 'hooks/useGameContext';
import ScoreBoard from '../ScoreBoard';
import TileGrid from './TileGrid';
import { GAME_STAGES } from 'utils/stages';
const GameBoard = () => {
  const { PLAYING } = GAME_STAGES;
  const {
    state: { players, currentPlayer, tiles, stage, matchedTiles },
    dispatch,
  } = useGameContext();

  return (
    <>
      <ScoreBoard players={players} currentPlayer={currentPlayer} />
      <TileGrid tiles={tiles} />
    </>
  );
};

export default GameBoard;
