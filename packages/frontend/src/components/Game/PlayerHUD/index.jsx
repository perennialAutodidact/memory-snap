import React from 'react';
import PropTypes from 'prop-types';
import { Player } from 'proptypes';
import './style.scss';

const PlayerHUD = ({ player, isActive }) => {
  const bgClasses = {
    1: 'bg-primary',
    2: 'bg-secondary',
  };

  const classes = {
    HUD: [
      'player-hud',
      'px-3 py-2',
      'd-flex flex-grow-1 gap-4 align-items-center',
      bgClasses[player.number],
    ].join(' '),
    playerName: 'player-name fw-bold h1 m-0',
    playerScore: [
      'player-score',
      'bg-light p-4 rounded-circle text-dark',
      'd-flex justify-content-center align-items-center',
      'border border-5',
      isActive ? 'active border-warning' : 'border-dark',
    ].join(' '),
  };

  return (
    <div data-testid={`PlayerHUD-${player.number}`} className={classes.HUD}>
      <div
        data-testid={`player-score-${player.number}`}
        className={classes.playerScore}
      >
        {player.score}
      </div>
      <div
        data-testid={`player-name-${player.number}`}
        className={`${classes.playerName}`}
      >
        {player.name}
      </div>
    </div>
  );
};

PlayerHUD.propTypes = {
  player: Player,
  isActive: PropTypes.bool,
};

export default PlayerHUD;
