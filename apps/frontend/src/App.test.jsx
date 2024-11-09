import { createSetupTestsForRoute, ui } from 'utils/tests';
import App from 'App';
import { baseState } from 'contexts';
import { produce } from 'immer';
import { GAME_STAGES } from 'utils/stages';

describe('App', () => {
  it('it renders the game component at /play', () => {
    const { game } = ui;
    const setupTests = createSetupTestsForRoute('/play');

    const state = produce(baseState, draft => {
      draft.game.stage = GAME_STAGES.PLAYING;
    });
    setupTests(App, { state });

    expect(game.container.get()).toBeInTheDocument();
  });

  it('it renders the setup component at /setup', () => {
    const { setupForm } = ui;
    const setupTests = createSetupTestsForRoute('/setup');

    const state = produce(baseState, draft => {
      draft.game.stage = GAME_STAGES.SETUP;
    });

    setupTests(App, { state });

    expect(setupForm.header.get()).toBeInTheDocument();
  });

  it('it renders the result display component at /game-over', () => {
    const { gameOver } = ui;
    const setupTests = createSetupTestsForRoute('/game-over');

    const state = produce(baseState, draft => {
      draft.game.stage = GAME_STAGES.GAME_OVER;
      draft.game.winner = baseState.game.players[0];
    });

    setupTests(App, { state });

    expect(gameOver.container.get()).toBeInTheDocument();
  });
});
