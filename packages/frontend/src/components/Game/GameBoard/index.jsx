import React from 'react';
import useGameContext from 'hooks/useGameContext';
import useFormContext from 'hooks/useFormContext';
import ScoreBoard from '../ScoreBoard';
import TileGrid from './TileGrid';

const GameBoard = () => {
  const {
    state: { currentPlayer, tiles },
  } = useGameContext();

  const formData = useFormContext();

  return (
    <>
      <ScoreBoard
        players={formData.state.formValues.playerNames}
        currentPlayer={currentPlayer}
      />
      <TileGrid tiles={tiles} />
    </>
  );
};

export default GameBoard;
