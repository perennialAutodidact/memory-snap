import { setupTests } from 'helpers/tests';
import PlayerHUD from '.';
import { baseState } from 'contexts';

const defaultProps = {
  player: baseState.game.currentPlayer,
  isActive: true,
};

describe('PlayerHUD component', () => {
  it('renders player name and score from props', () => {
    const props = { ...defaultProps };
    const {
      screen: { getByTestId },
    } = setupTests(PlayerHUD, { props });

    const playerName = getByTestId(`player-${props.player.number}-name`);
    const playerScore = getByTestId(`player-${props.player.number}-score`);

    expect(playerName).toBeInTheDocument();
    expect(playerName).toHaveTextContent(props.player.name);

    expect(playerScore).toBeInTheDocument();
    expect(playerScore).toHaveTextContent(props.player.score);
  });

  describe('active state', () => {
    it('renders "active" class', () => {
      const props = { ...defaultProps, isActive: true };
      const {
        screen: { getByTestId },
      } = setupTests(PlayerHUD, { props });
      expect(getByTestId('player-1-score')).toHaveClass('active');
    });

    it('does not render "active" class when inactive', () => {
      const props = { ...defaultProps, isActive: false };
      const {
        screen: { getByTestId },
      } = setupTests(PlayerHUD, { props });
      expect(getByTestId('player-1-score')).not.toHaveClass('active');
    });
  });
});
