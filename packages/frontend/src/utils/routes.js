import Setup from 'components/Setup';
import FormStep from 'components/Setup/FormStep';
import Game from 'components/Game';
import ResultDisplay from 'components/Game/GameBoard/ResultDisplay';

const routes = [
  {
    name: 'Setup',
    path: '/setup/*',
    Element: Setup,
    children: [
      {
        name: 'Step 1',
        path: '/step-1',
        Element: FormStep,
        elementProps: {
          formElement: '',
          label: "Enter the first player's name",
          buttonText: '',
          buttonColorClass: '',
        },
      },
      {
        name: 'Step 2',
        path: '/step-2',
        Element: FormStep,
        elementProps: {
          formElement: '',
          label: "Enter the second player's name",
          buttonText: '',
          buttonColorClass: '',
        },
      },
      {
        name: 'Step 3',
        path: '/step-3',
        Element: FormStep,
        elementProps: {
          formElement: '',
          label: 'How many tiles?',
          buttonText: '',
          buttonColorClass: '',
        },
      },
      {
        name: 'Step 4',
        path: '/step-4',
        Element: FormStep,
        elementProps: {
          formElement: '',
          label: 'What kind of photos on the tiles?',
          buttonText: '',
          buttonColorClass: '',
        },
      },
    ],
  },
  {
    name: 'Play',
    path: '/play',
    Element: Game,
    children: null,
  },
  {
    name: 'Game Over',
    path: '/game-over',
    Element: ResultDisplay,
    children: null,
  },
];

export { routes };
