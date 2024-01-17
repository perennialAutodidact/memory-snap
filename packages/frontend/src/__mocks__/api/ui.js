import { byTestId, byAltText, byRole } from 'testing-library-selector';

const ui = {
  tile: {
    container: (testId) => byTestId(testId),
    photo: (altText) => byAltText(altText),
  },

  playerNote: byRole('note'),
};

export { ui };
