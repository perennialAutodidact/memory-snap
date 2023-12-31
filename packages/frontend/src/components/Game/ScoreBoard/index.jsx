import React from 'react';
import PropTypes from 'prop-types';
import { Player } from 'proptypes';
import PlayerHUD from '../PlayerHUD';

const ScoreBoard = ({ players, currentPlayer }) => {
  if (!players) return null;
  return (
    <div className="d-flex">
      {players.map((player) => (
        <PlayerHUD
          key={player.number}
          player={player}
          isActive={player.number === currentPlayer.number}
        />
      ))}
    </div>
  );
};

ScoreBoard.propTypes = {
  players: PropTypes.arrayOf(Player),
  currentPlayer: Player,
};

export default ScoreBoard;
