import { createSetupTestsForRoute } from 'helpers/routeTests';
import App from 'App';
import { baseState } from 'contexts';
import { produce } from 'immer';

describe('App', () => {
  it('it renders that game component at /play', () => {
    const setupTests = createSetupTestsForRoute('/play');

    const { screen } = setupTests(App);

    expect(screen.getByLabelText('memory snap game')).toBeInTheDocument();
  });

  it('it renders the setup component at /setup', () => {
    const setupTests = createSetupTestsForRoute('/setup');

    const initialGameState = produce(baseState.game, (draft) => {
      draft.stage = 'SETUP';
    });

    const state = { ...baseState, game: initialGameState };

    const { screen } = setupTests(App, { state });

    expect(
      screen.getByRole('banner', { name: /game setup/i })
    ).toBeInTheDocument();
  });

  it('it renders the game over component at /game-over', () => {
    const setupTests = createSetupTestsForRoute('/game-over');

    const initialGameState = produce(baseState.game, (draft) => {
      draft.stage = 'GAME_OVER';
    });

    const state = { ...baseState, game: initialGameState };

    const { screen } = setupTests(App, { state });

    const element = screen.getByText('GAME OVER!');
    expect(element).toBeInTheDocument();
  });
});
