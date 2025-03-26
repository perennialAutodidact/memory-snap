import { GameContext } from '@/contexts/GameContext';
import { useContext } from 'react';

const useGameContext = () => {
  const gameContext = useContext(GameContext);

  if (!gameContext.gameState || !gameContext.gameDispatch) {
    throw new Error(
      'Component must be rendered as a child of the GameProvider component',
    );
  }

  return gameContext;
};

export default useGameContext;
