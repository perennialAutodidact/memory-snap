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
      'player-hud',
      'px-3 py-2',
      'd-flex gap-4 align-items-center',
      bgClasses[player.number],
    ].join(' '),
    playerName: 'player-name fw-bold h1 m-0',
    playerScore: [
      'player-score',
      'bg-light border rounded-circle text-dark',
      'd-flex justify-content-center align-items-center',
    ].join(' '),
  };

  return (
    <div className={classes.HUD}>
      <div
        data-testid={`player-${player.number}-score`}
        className={classes.playerScore}
      >
        {player.score}
      </div>
      <div
        data-testid={`player-${player.number}-name`}
        className={`${classes.playerName}`}
      >
        {player.name}
      </div>
    </div>
  );
};

PlayerHUD.propTypes = {
  player: Player,
};

export default PlayerHUD;
