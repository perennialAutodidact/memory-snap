import { updatePlayerScore } from './updatePlayerScore';
import { baseState } from 'contexts';

describe('updateScore', () => {
  it('returns a players array the same length as the one its given', () => {
    const { currentPlayer, players } = baseState.game;
    expect(updatePlayerScore(currentPlayer, players).length).toEqual(
      players.length
    );
  });

  it('increments the score value of the current player by one', () => {
    let { players } = baseState.game;

    expect(players[0].score).toBe(0);

    players = updatePlayerScore(players[0], players);
    expect(players[0].score).toBe(1);
  });
});
