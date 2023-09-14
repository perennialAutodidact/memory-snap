import { setupTests } from 'helpers/tests';
import ScoreBoard from '.';
import { baseState } from 'contexts';

describe('ScoreBoard component', () => {
  it('renders a PlayerHUD component for each player', () => {
    const { players } = baseState.game;
    const props = { players };
    const {
      screen: { getAllByTestId },
    } = setupTests(ScoreBoard, { props });

    expect(getAllByTestId(/PlayerHUD/)).toHaveLength(players.length);
  });
});