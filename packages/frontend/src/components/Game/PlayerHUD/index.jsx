import React from 'react';
import { Player } from 'proptypes';
import './style.scss';

const PlayerHUD = ({ player }) => {
  const bgClasses = {
    1: 'bg-primary',
    2: 'bg-secondary',
  };

  const classes = {
    HUD: [
      'd-flex',
      'justify-content-between',
      'align-items-center',
      'p-3',
      bgClasses[player.number],
    ].join(' '),
    score: [
      'playerHUD_score',
      'bg-light',
      'border',
      'rounded-circle',
      'd-flex',
      'justify-content-center',
      'align-items-center',
      'text-dark',
    ].join(' '),
  };

  return (
    <div className={classes.HUD}>
      <div data-testid={`player-${player.number}-name`} className="fw-bold">
        {player.name}
      </div>
      <div
        data-testid={`player-${player.number}-score`}
        className={classes.score}
      >
        {player.score}
      </div>
    </div>
  );
};

PlayerHUD.propTypes = {
  player: Player,
};

export default PlayerHUD;
