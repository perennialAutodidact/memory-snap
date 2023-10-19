import React from 'react';
// import PropTypes from "prop-types";
// import Tile from "./Tile";
import useGameContext from 'hooks/useGameContext';
import ScoreBoard from '../ScoreBoard';
import TileGrid from './TileGrid';

const GameBoard = () => {
  const {
    state: { players, currentPlayer, tiles },
  } = useGameContext();
  console.log(tiles, 'TIles from GB');
  return (
    <>
      <ScoreBoard players={players} currentPlayer={currentPlayer} />
      <TileGrid tiles={tiles} />
    </>
  );
};

export default GameBoard;
