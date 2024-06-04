import React from 'react';
import PropTypes from 'prop-types';
import { Player } from 'proptypes';
import PlayerHUD from '../PlayerHUD';

const ScoreBoard = ({ players, currentPlayer, names }) => {
  if (!players) return null;
  return (
    <div className="d-flex">
      {players.map((player, index) => (
        <PlayerHUD
          key={player.number}
          player={player}
          name={names[index]}
          isActive={player.number === currentPlayer.number}
        />
      ))}
    </div>
  );
};

ScoreBoard.propTypes = {
  players: PropTypes.arrayOf(Player),
  currentPlayer: Player,
  names: PropTypes.arrayOf(PropTypes.string),
};

export default ScoreBoard;
