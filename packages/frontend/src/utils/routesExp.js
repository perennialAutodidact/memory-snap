import React from 'react';
import Setup from 'components/Setup';
import Game from 'components/Game';
import ResultDisplay from 'components/Game/GameBoard/ResultDisplay';

const routesExp = [
  {
    path: '/setup',
    element: <Setup />,
    children: [
      {
        path: 'step1',
        element: <h1>STEP 1</h1>,
        children: null,
      },
      {
        path: 'step2',
        element: <h1>STEP 2</h1>,
        children: null,
      },
      {
        path: 'step3',
        element: <h1>STEP 3</h1>,
        children: null,
      },
      {
        path: 'step4',
        element: <h1>STEP 4</h1>,
        children: null,
      },
    ],
  },
  {
    path: '/playing',
    element: <Game />,
    children: null,
  },
  {
    path: '/game-over',
    element: <ResultDisplay />,
    children: null,
  },
];

export { routesExp };
