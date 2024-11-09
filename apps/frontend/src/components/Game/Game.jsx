import React, { useEffect } from 'react';
import { usePhotosContext } from 'hooks/usePhotosContext';
import Spinner from './Spinner/Spinner';
import GameBoard from './GameBoard';
import { useGameContext } from 'hooks/useGameContext';
import { handleGameOver } from 'contexts/GameContext/actions';
import { GAME_STAGES } from 'utils/stages';

const Game = () => {
  const {
    state: { status },
  } = usePhotosContext();

  const {
    state: { stage },
    dispatch,
  } = useGameContext();

  const isLoading = ['IDLE', 'PENDING'].includes(status);

  // effect to handle the all the game stages with a switch case
  // can change this to a switch
  useEffect(() => {
    if (stage === GAME_STAGES.GAME_OVER) {
      dispatch(handleGameOver());
    }
  }, [stage]);

  return (
    <section
      data-testid="game-container"
      className="d-flex flex-column"
      aria-label="memory snap game"
    >
      {isLoading ? (
        <div className="pt-5 d-flex justify-content-center">
          <Spinner />
        </div>
      ) : (
        <GameBoard />
      )}
    </section>
  );
};

export default Game;
