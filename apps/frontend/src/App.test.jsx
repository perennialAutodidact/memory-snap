import { act } from 'react';
import { createSetupTestsForRoute } from './utils';
import { ui } from '@/utils/tests/ui';
import { GAME_STAGES } from '@/utils/stages';
import App from './App';
import { baseState } from '@/contexts';
import { produce } from 'immer';
import { mockPhotos } from '@memory-snap/common/__mocks__';

describe('App', () => {
  describe('when then current game stage is PLAYING', () => {
    it('it renders the game component at /play', async () => {
      const { pages } = ui;
      const setupTests = createSetupTestsForRoute('/play');

      const state = produce(baseState, (draft) => {
        draft.game.currentStage = GAME_STAGES.PLAYING;
      });
      setupTests(App, { state });

      expect(pages.game.container.get()).toBeInTheDocument();
    });
  });

  describe('when the current game stage is SETUP', () => {
    it('it renders the setup component at /setup', async () => {
      const { pages } = ui;
      const setupTests = createSetupTestsForRoute('/setup');

      const state = produce(baseState, (draft) => {
        draft.game.currentStage = GAME_STAGES.SETUP;
      });

      setupTests(App, { state });

      expect(pages.setup.header.get()).toBeInTheDocument();
    });
  });

  describe('when the current game stage is GAME_OVER', () => {
    const setupTests = createSetupTestsForRoute('/game-over');
    const setupWithGameOver = (
      { initialState } = { initialState: baseState },
    ) => {
      const state = produce(initialState, (draft) => {
        draft.photos.currentPhotos = mockPhotos;
        draft.game.currentStage = GAME_STAGES.GAME_OVER;
        draft.game.winner = initialState.game.players[0];
      });

      return setupTests(App, { state });
    };

    it('renders the result display component at /game-over', async () => {
      const { pages } = ui;
      setupWithGameOver();
      expect(pages.gameOver.container.get()).toBeInTheDocument();
    });

    it('resets game and renders the setup form when the reset game button is clicked', async () => {
      const { pages } = ui;
      const { gameOver } = pages;
      const { user, screen } = setupWithGameOver();
      expect(gameOver.container.get()).toBeInTheDocument();

      const resetGameButton = screen.getByRole('link', { name: /reset game/i });

      await act(async () => {
        await user.click(resetGameButton);
      });
      expect(await pages.setup.form('game setup').find()).toBeInTheDocument();
    });
  });
});
