import { setupTests } from 'helpers/tests';
import PlayerHUD from '.';
import { baseState } from 'contexts';

describe('PlayerHUD component', () => {
  it('renders player name and score from props', () => {
    const { players, currentPlayer } = baseState.game;
    const player = players[currentPlayer];
    const {
      screen: { getByTestId },
    } = setupTests(PlayerHUD, {
      props: { player },
    });

    const playerName = getByTestId(`player-${player.number}-name`);
    const playerScore = getByTestId(`player-${player.number}-score`);

    expect(playerName).toBeInTheDocument();
    expect(playerName).toHaveTextContent(player.name);

    expect(playerScore).toBeInTheDocument();
    expect(playerScore).toHaveTextContent(player.score);
  });
});
