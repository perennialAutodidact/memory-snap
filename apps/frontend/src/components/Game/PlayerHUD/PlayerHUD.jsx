import React from 'react';
import Proptypes from 'Proptypes';
import './style.scss';

const PlayerHUD = ({ player, isActive }) => {
  const bgClasses = {
    0: 'bg-primary',
    1: 'bg-secondary',
  };

  const classes = {
    HUD: [
      'player-hud',
      'px-3 py-2',
      'd-flex flex-grow-1 gap-4 align-items-center',
      bgClasses[player.index],
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
    <div data-testid={`PlayerHUD-${player.index}`} className={classes.HUD}>
      {isActive ? (
        <span
          className="visually-hidden"
          role="note"
          aria-label={`turn-indicator-${player.index}`}
        >
          name: {player.name}
        </span>
      ) : null}
      <div
        data-testid={`player-score-${player.index}`}
        className={classes.playerScore}
      >
        {player.score}
      </div>
      <div
        data-testid={`player-name-${player.index}`}
        className={`${classes.playerName}`}
      >
        {player.name}
      </div>
    </div>
  );
};

PlayerHUD.propTypes = Proptypes.Game.PlayerHUD;

export default PlayerHUD;
