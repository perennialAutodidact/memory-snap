import { setupTests } from 'helpers/tests';
import ResultDisplay from '.';
import { produce } from 'immer';
import { baseState } from 'contexts';

describe('result display', () => {
  it('displays tie message when its a tie', () => {
    const tieGameState = produce(baseState.game, (draft) => {
      draft.players[0].score = 2;
      draft.players[1].score = 2;
    });

    const state = { ...baseState, game: tieGameState };

    const { screen } = setupTests(ResultDisplay, { state });

    const display = screen.getByTestId('result-display');

    expect(display).toHaveTextContent('Its a tie!');
  });

  it('displays the winner when its not a tie', () => {
    const tieGameState = produce(baseState.game, (draft) => {
      draft.players[0].score = 1;
      draft.players[1].score = 3;
    });

    const state = { ...baseState, game: tieGameState };

    const { screen } = setupTests(ResultDisplay, { state });

    const display = screen.getByTestId('result-display');

    expect(display).toHaveTextContent('Player 2 wins!');
    expect(display).not.toHaveTextContent('Its a tie!');
  });
});
