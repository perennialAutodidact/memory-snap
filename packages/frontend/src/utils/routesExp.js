import React from 'react';
import Setup from 'components/Setup';
import FormStepOne from 'components/Setup/FormStep/FormStepOne';
import FormStepTwo from 'components/Setup/FormStep/FormStepTwo';
import FormStepThree from 'components/Setup/FormStep/FormStepThree';
import FormStepFour from 'components/Setup/FormStep/FormStepFour';
import Game from 'components/Game';
import ResultDisplay from 'components/Game/GameBoard/ResultDisplay';

const routesExp = [
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

export { routesExp };
