import { byAltText, byRole, byTestId, byText } from 'testing-library-selector';

const ui = {
  game: {
    container: byTestId('game-container'),
    gameBoard: {
      tile: {
        container: testId => byTestId(testId),
        photo: altText => byAltText(altText),
      },
    },
    scoreBoard: {
      player: {
        HUD: player => byTestId(`PlayerHUD-${player.index}`),
        name: player => byText(player.name),
        turnIndicator: player =>
          byRole('note', { name: `turn-indicator-${player.index}` }),
        score: player => byTestId(`player-score-${player.index}`),
      },
    },
  },
  gameOver: {
    container: byText(/game over/i),
  },
  setupForm: {
    header: byRole('banner', { name: /game setup/i }),
  },
  test: {
    component: byTestId('testComponent'),
  },
};

export { ui };
