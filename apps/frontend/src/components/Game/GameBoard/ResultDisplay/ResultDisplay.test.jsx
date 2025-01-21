import { setupTests } from '@/utils';
import ResultDisplay from './ResultDisplay';
import { produce } from 'immer';
import { baseState } from '@/contexts';
import { GAME_STAGES } from '@/utils';

describe('result display', () => {
  it('displays tie message when its a tie', async () => {
    const tieGameState = produce(baseState.game, (draft) => {
      draft.currentStage = GAME_STAGES.GAME_OVER;
      draft.players[0].score = 2;
      draft.players[1].score = 2;
      draft.stage = GAME_STAGES.GAME_OVER;
      draft.winner = null;
    });

    const state = { ...baseState, game: tieGameState };

    const { screen } = setupTests(ResultDisplay, { state });

    const display = screen.getByTestId('result-display');

    expect(display).toHaveTextContent('Its a tie!');
  });

  it('displays the winner when its not a tie', async () => {
    const state = produce(baseState, (draft) => {
      draft.game.currentStage = GAME_STAGES.GAME_OVER;
      draft.game.players[0].score = 1;
      draft.game.players[1].score = 3;
      draft.game.winner = baseState.game.players[1];
    });

    const { screen } = setupTests(ResultDisplay, { state });

    expect(screen.getByText('Player 2 wins!')).toBeInTheDocument();
    expect(screen.queryByText('Its a tie!')).toBe(null);
  });
});
