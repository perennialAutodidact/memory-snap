import { GameContext } from 'contexts/game/index.js';
import { useContext } from 'react';

const useGameContext = () => {
  const context = useContext(GameContext);

  if (context.state === undefined && context.dispatch === undefined) {
    throw new Error(
      'Component must be rendered as a child of the GameProvider component'
    );
  }

  return context;
};

export default useGameContext;
