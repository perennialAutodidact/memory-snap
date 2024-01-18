import React, { useEffect } from 'react';
import useGameContext from 'hooks/useGameContext';
import ScoreBoard from '../ScoreBoard';
import TileGrid from './TileGrid';
import { handleGameOver } from 'contexts/game/actions';
import ResultDisplay from './ResultDisplay';

const GameBoard = () => {
  const {
    state: { players, currentPlayer, tiles, stage },
    dispatch,
  } = useGameContext();

  useEffect(() => {
    const matchedTiles = tiles.filter((tile) => tile.isMatched === true);
    if (tiles.length !== 0 && matchedTiles.length === tiles.length) {
      dispatch(handleGameOver());
    }
  }, [tiles]);

  return (
    <>
      <ScoreBoard players={players} currentPlayer={currentPlayer} />
      {stage === 'playing' ? <TileGrid tiles={tiles} /> : <ResultDisplay />}
    </>
  );
};

export default GameBoard;
