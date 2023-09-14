import React from 'react';
import PropTypes from 'prop-types';
import { Player } from 'proptypes';
import PlayerHUD from '../PlayerHUD';

const ScoreBoard = ({ players }) => {
  return (
    <div>
      {players.map((player) => (
        <PlayerHUD key={player.number} player={player} />
      ))}
    </div>
  );
};

ScoreBoard.propTypes = {
  players: PropTypes.arrayOf(Player),
};

export default ScoreBoard;
