import {
  byAltText,
  byLabelText,
  byRole,
  byTestId,
  byText,
} from 'testing-library-selector';

export const ui = {
  app: {
    container: byRole('main'),
  },
  pages: {
    setup: {
      header: byRole('banner', { name: /game setup/i }),
      form: (name) => byRole('form', { name: new RegExp(name, 'i') }),
      formStep: {
        formElement: (labelText) => byLabelText(new RegExp(labelText, 'i')),
      },
    },
    game: {
      container: byTestId('game-container'),
      gameBoard: {
        tile: {
          container: (testId) => byTestId(testId),
          photo: (altText) => byAltText(altText),
        },
      },
      scoreBoard: {
        player: {
          HUD: (player) => byTestId(`PlayerHUD-${player.index}`),
          name: (player) => byText(player.name),
          turnIndicator: (player) =>
            byRole('note', { name: `turn-indicator-${player.index}` }),
          score: (player) => byTestId(`player-score-${player.index}`),
        },
      },
    },
    gameOver: {
      container: byText(/game over/i),
    },
  },
  common: {
    button: (buttonText) =>
      byRole('button', { name: new RegExp(buttonText, 'i') }),
  },
  testComponent: {
    container: byTestId('testComponent'),
    stateDisplay: byTestId('stateDisplay'),
    locationDisplay: byTestId('locationDisplay'),
  },
};
