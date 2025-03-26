import React from 'react';
import proptypes from '@/proptypes';
import PlayerHUD from '../PlayerHUD/PlayerHUD';

const ScoreBoard = ({ players, currentPlayer }) => {
  if (!players) return null;
  return (
    <div className="d-flex">
      {players.map((player) => (
        <PlayerHUD
          key={player.index}
          player={player}
          name={players[player.index].name}
          isActive={player.index === currentPlayer.index}
        />
      ))}
    </div>
  );
};

ScoreBoard.propTypes = proptypes.Game.ScoreBoard;

export default ScoreBoard;
