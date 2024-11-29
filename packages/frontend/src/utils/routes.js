import Setup from 'components/Setup';
import FormStep from 'components/Setup/FormStep';
import Slider from 'components/Slider';
import Input from 'components/Setup/FormStep/Input';
import Game from 'components/Game';
import ResultDisplay from 'components/Game/GameBoard/ResultDisplay';
import IndexElement from 'components/Setup/FormStep/IndexElement';
import {
  player1Name,
  player2Name,
  tileNumber,
  imageSearchTerm,
} from '../utils/validationSchema';

const routes = [
  {
    name: 'Setup',
    path: '/setup/*',
    Element: Setup,
    children: [
      {
        name: 'player1Name',
        path: '/step-1',
        index: false,
        Element: FormStep,
        schema: player1Name,
        elementProps: {
          FormElement: Input,
          id: 'player-1-name',
          label: "Enter the first player's name",
          placeholder: 'Enter name',
          buttonText: 'Next',
          buttonColorClass: 'warning',
        },
      },
      {
        name: 'player2Name',
        path: '/step-2',
        index: false,
        Element: FormStep,
        schema: player2Name,
        elementProps: {
          FormElement: Input,
          id: 'player-2-name',
          label: "Enter the second player's name",
          placeholder: 'Enter name',
          buttonText: 'Next',
          buttonColorClass: 'warning',
        },
      },
      {
        name: 'tileNumber',
        path: '/step-3',
        index: false,
        Element: FormStep,
        schema: tileNumber,
        elementProps: {
          FormElement: Slider,
          id: 'tiles-amount',
          label: 'How many tiles?',
          buttonText: 'Next',
          buttonColorClass: 'warning',
        },
      },
      {
        name: 'imageSearchTerm',
        path: '/step-4',
        index: false,
        Element: FormStep,
        schema: imageSearchTerm,
        elementProps: {
          FormElement: Input,
          id: 'image-type',
          label: 'What kind of photos on the tiles?',
          placeholder: 'e.g. cats',
          buttonText: 'Play',
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

export { routes };
