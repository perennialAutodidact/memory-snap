import { produce } from 'immer';
import { setupTests } from 'utils/tests';
import ScoreBoard from './ScoreBoard';
import { baseState } from 'contexts';
import { GAME_STAGES } from 'utils';

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
    const state = produce(baseState, draft => {
      draft.game.stage = GAME_STAGES.PLAYING;
    });
    const {
      screen: { getByTestId },
    } = setupTests(ScoreBoard, { props, state });

    expect(getByTestId('player-score-0')).toHaveClass('active');
    expect(getByTestId('player-score-1')).not.toHaveClass('active');
  });
});
