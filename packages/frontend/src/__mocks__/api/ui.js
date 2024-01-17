import { byTestId, byAltText, byRole } from 'testing-library-selector';

const ui = {
  tile: {
    container: (testId) => byTestId(testId),
    photo: (altText) => byAltText(altText),
  },

  player: {
    turnIndicator: (playerName) =>
      byRole('note', { name: `turn-indicator-${playerName}` }),
  },
};

export { ui };
