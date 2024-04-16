import React from 'react';
import Setup from 'components/Setup';
import {
  FormStepOne,
  FormStepTwo,
  FormStepThree,
  FormStepFour,
} from 'components/Setup/FormStep';
import Game from 'components/Game';
import ResultDisplay from 'components/Game/GameBoard/ResultDisplay';

const routes = [
  {
    path: '/setup',
    element: <Setup />,
    children: [
      {
        path: 'step-1',
        element: <FormStepOne />,
        children: null,
      },
      {
        path: 'step-2',
        element: <FormStepTwo />,
        children: null,
      },
      {
        path: 'step-3',
        element: <FormStepThree />,
        children: null,
      },
      {
        path: 'step-4',
        element: <FormStepFour />,
        children: null,
      },
    ],
  },
  {
    path: '/play',
    element: <Game />,
    children: null,
  },
  {
    path: '/game-over',
    element: <ResultDisplay />,
    children: null,
  },
];

export { routes };
