import { setupTests } from 'helpers/tests';
import { createTilesFromPhotos } from 'helpers/createTilesFromPhotos';
import TileGrid from '.';
import { mockPhotos } from '__mocks__/api/mockPhotos';
import userEvent from '@testing-library/user-event';
import { getByTestId } from '@testing-library/react';

describe('TileGrid component', () => {
  it('renders all tiles', () => {
    const tiles = createTilesFromPhotos(mockPhotos);

    const { screen } = setupTests(TileGrid, { props: { tiles } });

    const allTiles = screen.getAllByTestId(/tile/);

    expect(allTiles.length).toBe(10);
  });

  it('flips a tile after two seconds when onFlipTile is called', async () => {

    const tiles = createTilesFromPhotos(mockPhotos, { shuffle: false });
    const { screen } = setupTests(TileGrid, { props: { tiles } });
    
    screen.debug()
    const tile = screen.getByTestId(/tile-1/);
    screen.debug(tile);
    
    const user = userEvent.setup();

    expect(tile).toHaveClass('faceDown');

    await user.click(tile);
    
    //THIS SHOULD FAIL 
    expect(screen.getByTestId(/tile-1/)).toHaveClass('faceDown');
    
    //NONE HAVE CHANGED
    const allTiles = screen.getAllByTestId(/tile/);
    screen.debug(allTiles)

  });
});
