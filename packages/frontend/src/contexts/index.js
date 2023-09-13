export const baseState = {
  photos: {
    photos: null,
    loading: false,
  },
  setup: {
    currentStep: 1,
    totalSteps: 3,
  },
  game: {
    stage: 'playing', // setup, playing, complete
    currentPlayer: 1,
    players: {
      1: {
        name: 'Player 1',
        number: 1,
        score: 0,
      },
      2: {
        name: 'Player 2',
        number: 2,
        score: 0,
      },
    },
  },
};
