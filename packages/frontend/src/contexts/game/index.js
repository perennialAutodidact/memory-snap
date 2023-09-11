import { createContext, useEffect } from 'react';
import { baseState } from 'contexts';

export const GameContext = createContext(baseState.game);

