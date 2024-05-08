import Setup from 'components/Setup';
import FormStep from 'components/Setup/FormStep';
import Slider from 'components/Slider';
import Input from 'components/Setup/FormStep/Input';
import Game from 'components/Game';
import ResultDisplay from 'components/Game/GameBoard/ResultDisplay';
import TempElement from 'components/Setup/FormStep/TempElement';

const routes = [
  {
    name: 'Setup',
    path: '/setup/*',
    Element: Setup,
    children: [
      {
        name: 'Step 1',
        path: '/step-1',
        index: false,
        Element: FormStep,
        elementProps: {
          FormElement: Input,
          id: 'player-1-name',
          label: "Enter the first player's name",
          buttonText: 'next',
          buttonColorClass: 'warning',
        },
      },
      {
        name: 'Step 2',
        path: '/step-2',
        index: false,
        Element: FormStep,
        elementProps: {
          FormElement: Input,
          id: 'player-2-name',
          label: "Enter the second player's name",
          buttonText: 'next',
          buttonColorClass: 'warning',
        },
      },
      {
        name: 'Step 3',
        path: '/step-3',
        index: false,
        Element: FormStep,
        elementProps: {
          FormElement: Slider,
          id: 'tiles-amount',
          label: 'How many tiles?',
          buttonText: 'next',
          buttonColorClass: 'warning',
        },
      },
      {
        name: 'Step 4',
        path: '/step-4',
        index: false,
        Element: FormStep,
        elementProps: {
          FormElement: Input,
          id: 'image-type',
          label: 'What kind of photos on the tiles?',
          buttonText: 'play',
          buttonColorClass: 'success',
        },
      },
      {
        name: 'Index',
        path: '*',
        index: true,
        Element: TempElement,
        elementProps: {
          FormElement: '',
          id: 'index',
          label: '',
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
