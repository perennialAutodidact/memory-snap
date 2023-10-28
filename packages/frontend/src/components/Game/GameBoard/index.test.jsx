import { setupTests } from 'helpers/tests';
import GameBoard from '.';
import { mockPhotos } from '__mocks__/api/mockPhotos';
import { createTilesFromPhotos } from 'helpers/createTilesFromPhotos';
import { baseState } from 'contexts';
import { produce } from 'immer';

beforeEach(() => {
  jest.useFakeTimers('legacy')
})

afterEach(() => {
  // jest.runOnlyPendingTimers()
  jest.useRealTimers()
})

jest.spyOn(global, 'setTimeout');

describe('GameBoard component', () => {

  it('flips the tile thats been clicked', async () => {
    
    const tiles = createTilesFromPhotos(mockPhotos, { shuffle: false });

    const initialGameState = produce(baseState.game, (draft) => {
      draft.tiles = tiles;
    });
    const state = { ...baseState, game: initialGameState };

    const { screen, user } = setupTests(GameBoard, { state });

    const element = screen.getByTestId('tile-1');

    expect(screen.getByTestId('tile-1')).toHaveClass('faceDown');
    await user.click(element);
    
    
    jest.advanceTimersByTime(3000);
    // expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(screen.getByTestId('tile-1')).not.toHaveClass('faceDown');
  });
});
