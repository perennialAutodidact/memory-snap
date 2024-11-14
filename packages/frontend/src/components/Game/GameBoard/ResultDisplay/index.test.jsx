import { setupTests } from 'helpers/tests';
import ResultDisplay from '.';
import { produce } from 'immer';
import { baseState } from 'contexts';

describe('result display', () => {
  it('displays tie message when its a tie', () => {
    const tieGameState = produce(baseState.game, draft => {
      draft.players[0].score = 2;
      draft.players[1].score = 2;
      draft.stage = 2;
      draft.winner = null;
    });

    const state = { ...baseState, game: tieGameState };

    const { screen } = setupTests(ResultDisplay, { state });

    const display = screen.getByTestId('result-display');

    expect(display).toHaveTextContent('Its a tie!');
  });

  it('displays the winner when its not a tie', () => {
    const winnerGameState = produce(baseState.game, draft => {
      draft.players[0].score = 3;
      draft.players[1].score = 1;
      draft.stage = 2;
      draft.winner = {
        color: { className: 'primary' },
        name: 'Mario',
        number: 1,
        score: 4,
      };
    });

    const state = { ...baseState, game: winnerGameState };

    const { screen } = setupTests(ResultDisplay, { state });

    const display = screen.getByTestId('result-display');

    expect(screen.getByText('Mario wins!')).toBeInTheDocument();
    expect(screen.queryByText('Its a tie!')).toBe(null);
  });
});
