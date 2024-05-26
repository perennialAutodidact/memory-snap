import { createSetupTestsForRoute } from 'helpers/tests';
import App from 'App';
import { baseState } from 'contexts';
import { produce } from 'immer';
import { GAME_STAGES } from 'utils/stages';

describe('App', () => {
  it('it renders that game component at /play', () => {
    const setupTests = createSetupTestsForRoute('/play');

    const { screen } = setupTests(App);

    expect(screen.getByTestId('game-component')).toBeInTheDocument();
  });

  it('it renders the setup component at /setup', () => {
    const setupTests = createSetupTestsForRoute('/setup');

    const setupGameState = produce(baseState.game, (draft) => {
      draft.stage = GAME_STAGES.SETUP;
    });

    const state = { ...baseState, game: setupGameState };

    const { screen } = setupTests(App, { state });

    expect(
      screen.getByRole('banner', { name: /game setup/i })
    ).toBeInTheDocument();
  });

  it('it renders the result display component at /game-over', () => {
    const setupTests = createSetupTestsForRoute('/game-over');

    const gameOverState = produce(baseState.game, (draft) => {
      draft.stage = GAME_STAGES.GAME_OVER;
      draft.winner = baseState.game.players[0];
    });

    const state = { ...baseState, game: gameOverState };

    const { screen } = setupTests(App, { state });

    const element = screen.getByText('GAME OVER!');
    expect(element).toBeInTheDocument();
  });
});
