import React from 'react';
import Setup from 'components/Setup';
import Game from 'components/Game';

const routes = {
  SETUP: {
    path: '/setup',
    component: <Setup />,
  },
  PLAYING: {
    path: '/play',
    component: <Game />,
  },
  //   GAME_OVER: {
  //     path: '/game-over',
  //     component: GameOver,
  //   },
};

export { routes };
