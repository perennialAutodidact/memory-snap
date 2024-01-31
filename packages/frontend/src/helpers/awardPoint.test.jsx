import { awardPoint } from './awardPoint';
import { baseState } from 'contexts';

const players = baseState.game.players;

const playerIndex = baseState.game.playerIndex;

const currentPlayer = baseState.game.currentPlayer;

describe('awardPoint', () => {
  it('returns a players array the same length as the one its given', () => {
    expect(awardPoint(players, playerIndex).length).toEqual(players.length);
  });

  it('increments the score value of the current player by one', () => {
    expect(currentPlayer.score).toBe(0);

    const result = awardPoint(players, playerIndex);

    expect(result[0].score).toBe(1);
  });
});
