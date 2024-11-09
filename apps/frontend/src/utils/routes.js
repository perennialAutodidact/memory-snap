import SetupPage from 'components/Setup/SetupPage';
import FormStep from 'components/Setup/FormStep/FormStep';
import Slider from 'components/Slider';
import Input from 'components/Setup/FormStep/Input';
import Game from 'components/Game';
import ResultDisplay from 'components/Game/GameBoard/ResultDisplay/ResultDisplay';
import IndexElement from 'components/Setup/FormStep/IndexElement';
import { validationSchema } from '../utils/validationSchema';

export const routes = [
  {
    name: 'Setup',
    path: '/setup/*',
    Element: SetupPage,
    children: [
      {
        name: 'player1Name',
        path: '/step-1',
        index: false,
        Element: FormStep,
        schema: validationSchema.player1Name,
        elementProps: {
          FormElement: Input,
          id: 'player-1-name',
          label: "Enter the first player's name",
          buttonText: 'next',
          buttonColorClass: 'warning',
        },
      },
      {
        name: 'player2Name',
        path: '/step-2',
        index: false,
        Element: FormStep,
        schema: validationSchema.player2Name,
        elementProps: {
          FormElement: Input,
          id: 'player-2-name',
          label: "Enter the second player's name",
          buttonText: 'next',
          buttonColorClass: 'warning',
        },
      },
      {
        name: 'tileNumber',
        path: '/step-3',
        index: false,
        Element: FormStep,
        schema: validationSchema.tileNumber,
        elementProps: {
          FormElement: Slider,
          id: 'tiles-amount',
          label: 'How many tiles?',
          buttonText: 'next',
          buttonColorClass: 'warning',
        },
      },
      {
        name: 'imageSearchQuery',
        path: '/step-4',
        index: false,
        Element: FormStep,
        schema: validationSchema.imageSearchQuery,
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
        Element: IndexElement,
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
