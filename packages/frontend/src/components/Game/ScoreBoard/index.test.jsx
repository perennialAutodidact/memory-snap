import { setupTests } from 'helpers/tests';
import ScoreBoard from '.';
import { baseState } from 'contexts';

describe('ScoreBoard component', () => {
  it('renders a PlayerHUD component for each player', () => {
    const { currentPlayer, players } = baseState.game;
    const props = { currentPlayer, players };
    const {
      screen: { getAllByTestId },
    } = setupTests(ScoreBoard, { props });

    expect(getAllByTestId(/PlayerHUD/)).toHaveLength(players.length);
  });

  it('renders active player', () => {
    const { currentPlayer, players } = baseState.game;
    const props = { currentPlayer, players };
    const {
      screen: { getByTestId },
    } = setupTests(ScoreBoard, { props });

    expect(getByTestId('player-score-1')).toHaveClass('active');
    expect(getByTestId('player-score-2')).not.toHaveClass('active');
  });
});
