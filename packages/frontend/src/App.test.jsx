import { createSetupTestsForRoute } from 'helpers/tests';
import App from 'App';
import { baseState } from 'contexts';
import { produce } from 'immer';
import { GAME_STAGES } from 'utils/stages';

describe('App', () => {
  it('it renders the game component at /play', () => {
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

  it('it renders the correct form component at /setup/step-1', () => {
    const setupTests = createSetupTestsForRoute('/setup/step-1');

    const setupGameState = produce(baseState.game, (draft) => {
      draft.stage = GAME_STAGES.SETUP;
    });

    const setupFormState = produce(baseState.form, (draft) => {
      draft.currentStep = 1;
    });

    const state = { ...baseState, game: setupGameState, form: setupFormState };

    const { screen } = setupTests(App, { state });

    const stepOneComponent = screen.getByText('Player 1 Name');

    expect(stepOneComponent).toBeInTheDocument();
  });

  it('it renders the correct form component at /setup/step-2', () => {
    const setupTests = createSetupTestsForRoute('/setup/step-2');

    const setupGameState = produce(baseState.game, (draft) => {
      draft.stage = GAME_STAGES.SETUP;
    });

    const setupFormState = produce(baseState.form, (draft) => {
      draft.currentStep = 2;
    });

    const state = { ...baseState, game: setupGameState, form: setupFormState };

    const { screen } = setupTests(App, { state });

    const stepTwoComponent = screen.getByText('Player 2 Name');

    expect(stepTwoComponent).toBeInTheDocument();
  });

  it('it renders the correct form component at /setup/step-3', () => {
    const setupTests = createSetupTestsForRoute('/setup/step-3');

    const setupGameState = produce(baseState.game, (draft) => {
      draft.stage = GAME_STAGES.SETUP;
    });

    const setupFormState = produce(baseState.form, (draft) => {
      draft.currentStep = 3;
    });

    const state = { ...baseState, game: setupGameState, form: setupFormState };

    const { screen } = setupTests(App, { state });

    const stepThreeComponent = screen.getByText('Number of Tiles');

    expect(stepThreeComponent).toBeInTheDocument();
  });

  it('it renders the correct form component at /setup/step-4', () => {
    const setupTests = createSetupTestsForRoute('/setup/step-4');

    const setupGameState = produce(baseState.game, (draft) => {
      draft.stage = GAME_STAGES.SETUP;
    });

    const setupFormState = produce(baseState.form, (draft) => {
      draft.currentStep = 4;
    });

    const state = { ...baseState, game: setupGameState, form: setupFormState };

    const { screen } = setupTests(App, { state });

    const stepFourComponent = screen.getByText('Pictures Of');

    expect(stepFourComponent).toBeInTheDocument();
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
