import { setupTests } from 'helpers/tests';
import PlayerHUD from '.';
import { baseState } from 'contexts';

describe('PlayerHUD component', () => {
  it('renders player name and score from props', () => {
    const { currentPlayer } = baseState.game;
    const props = { player: currentPlayer, isActive: true };
    const {
      screen: { getByTestId },
    } = setupTests(PlayerHUD, { props });

    const playerName = getByTestId(`player-name-${props.player.number}`);
    const playerScore = getByTestId(`player-score-${props.player.number}`);

    expect(playerName).toBeInTheDocument();
    expect(playerName).toHaveTextContent(props.player.name);

    expect(playerScore).toBeInTheDocument();
    expect(playerScore).toHaveTextContent(props.player.score);
  });

  it('renders active player with "active" class', () => {
    const { currentPlayer } = baseState.game;
    const props = { player: currentPlayer, isActive: true };
    const {
      screen: { getByTestId },
    } = setupTests(PlayerHUD, { props });
    expect(getByTestId('player-score-1')).toHaveClass('active');
  });
});
