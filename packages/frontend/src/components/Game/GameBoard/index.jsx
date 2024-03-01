import React, { useEffect } from 'react';
import useGameContext from 'hooks/useGameContext';
import ScoreBoard from '../ScoreBoard';
import TileGrid from './TileGrid';
import { handleGameOver } from 'contexts/game/actions';
import ResultDisplay from './ResultDisplay';
const GameBoard = () => {
  const {
    state: { players, currentPlayer, tiles, stage, matchedTiles },
    dispatch,
  } = useGameContext();

  useEffect(() => {
    // const matchedTiles = tiles.filter((tile) => tile.isMatched === true);

    //this version of matchedTiles is from state, and always one step behing game play
    if (tiles.length !== 0 && matchedTiles.length === tiles.length) {
      dispatch(handleGameOver());
    }
  }, [matchedTiles, tiles]);

  return (
    <>
      <ScoreBoard players={players} currentPlayer={currentPlayer} />
      {stage === 'PLAYING' ? <TileGrid tiles={tiles} /> : <ResultDisplay />}
    </>
  );
};

export default GameBoard;
