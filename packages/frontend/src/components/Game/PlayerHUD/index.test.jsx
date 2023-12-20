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

    const playerName = getByTestId(`player-name-${props.player.number}`);
    const playerScore = getByTestId(`player-score-${props.player.number}`);

    expect(playerName).toBeInTheDocument();
    expect(playerName).toHaveTextContent(props.player.name);

    expect(playerScore).toBeInTheDocument();
    expect(playerScore).toHaveTextContent(props.player.score);
  });

  it('renders a span with the text content Player 1 when player 1 is active', () => {
    const props = {
      player: {
        name: 'Player 1',
        number: 1,
        score: 0,
        color: {
          className: 'primary',
        },
      },
      isActive: true,
    };
    const {
      screen: { getByRole },
    } = setupTests(PlayerHUD, { props });

    const currentPlayer = getByRole('note');

    expect(currentPlayer).toHaveTextContent('Player 1');
  });

  it('renders a span with the text content Player 2 when player 2 is active', () => {
    const props = {
      player: {
        name: 'Player 2',
        number: 2,
        score: 0,
        color: {
          className: 'secondary',
        },
      },
      isActive: true,
    };
    const {
      screen: { getByRole },
    } = setupTests(PlayerHUD, { props });

    const currentPlayer = getByRole('note');

    expect(currentPlayer).toHaveTextContent('Player 2');
  });

  describe('active state', () => {
    it('renders "active" class', () => {
      const props = { ...defaultProps, isActive: true };
      const {
        screen: { getByTestId },
      } = setupTests(PlayerHUD, { props });
      expect(getByTestId('player-score-1')).toHaveClass('active');
    });

    it('does not render "active" class when inactive', () => {
      const props = { ...defaultProps, isActive: false };
      const {
        screen: { getByTestId },
      } = setupTests(PlayerHUD, { props });
      expect(getByTestId('player-score-1')).not.toHaveClass('active');
    });
  });
});
