import { setupTests } from 'helpers/tests';
import GameBoard from '.';
import { mockPhotos } from '__mocks__/api/mockPhotos';
import { createTilesFromPhotos } from 'helpers/createTilesFromPhotos';
import { baseState } from 'contexts';
import { produce } from 'immer';
import userEvent from '@testing-library/user-event';




describe('GameBoard component', () => {
  it( 'flips the tile thats been clicked', async () => {
    
    const tiles = createTilesFromPhotos(mockPhotos, {shuffle: false});

    const initialGameState = produce(baseState.game, (draft) => {
      draft.tiles = tiles
    })
    const state = {...baseState, game: initialGameState };
    
    const { screen, user } = setupTests(GameBoard, { state });
    screen.debug(initialGameState.game)
    
    const tileGrid = screen.getByRole('tile-grid')

    const element = screen.getByTestId('tile-1')

    await user.click(element);

    const allTiles = screen.getAllByTestId(/tile/)
    screen.debug(allTiles, 'ALL TILES')

    expect(screen.getByTestId('tile-1')).not.toHaveClass('faceDown')

    //assert that the grid has changed
  });
});
