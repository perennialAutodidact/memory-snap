import React from 'react';
import useGameContext from 'hooks/useGameContext';
import useFormContext from 'hooks/useFormContext';
import ScoreBoard from '../ScoreBoard';
import TileGrid from './TileGrid';

const GameBoard = () => {
  const {
    state: { players, currentPlayer, tiles },
  } = useGameContext();

  const {
    state: {
      formValues: { playerNames },
    },
  } = useFormContext();

  return (
    <>
      <ScoreBoard
        players={players}
        names={playerNames}
        currentPlayer={currentPlayer}
      />
      <TileGrid tiles={tiles} />
    </>
  );
};

export default GameBoard;
