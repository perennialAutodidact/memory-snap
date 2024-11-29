import { setupTests } from 'helpers/tests';
import PlayerHUD from '.';
import { baseState } from 'contexts';
import { produce } from 'immer';

const defaultProps = {
  player: baseState.game.currentPlayer,
  isActive: true,
};

describe('PlayerHUD component', () => {
  it('renders player name and score from props', () => {
    const props = {
      player: baseState.game.players[0],
      isActive: true,
      name: 'Mario'
    };
    const {
      screen: { getByTestId },
    } = setupTests(PlayerHUD, { props });

    const playerName = getByTestId(`player-name-${props.player.number}`);
    const playerScore = getByTestId(`player-score-${props.player.number}`);

    expect(playerName).toBeInTheDocument();
    expect(playerName).toHaveTextContent(props.name);

    expect(playerScore).toBeInTheDocument();
    expect(playerScore).toHaveTextContent(props.player.score);
  });

  it('renders a span with the text content Player 1 when player 1 is active', () => {
    const props = {
      player: baseState.game.players[0],
      isActive: true,
      name: 'Mario'
    };
    const {
      screen: { getByRole },
    } = setupTests(PlayerHUD, { props });

    const playerNote = getByRole('note');

    expect(playerNote).toHaveTextContent('Mario');
  });

  it('renders a span with the text content Player 2 when player 2 is active', () => {
    const props = {
      player: baseState.game.players[1],
      isActive: true,
      name: 'Luigi',
    };

    const currentPlayer2State = produce(baseState.game, draft => {
      draft.currentPlayer = baseState.game.players[1];
    });

    const state = { ...baseState, game: currentPlayer2State };

    const {
      screen: { getByRole },
    } = setupTests(PlayerHUD, { props, state });

    const playerNote = getByRole('note');
    expect(playerNote).toHaveTextContent('Luigi');
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
