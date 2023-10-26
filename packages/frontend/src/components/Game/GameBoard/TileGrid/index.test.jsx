import { setupTests } from 'helpers/tests';
import { createTilesFromPhotos } from 'helpers/createTilesFromPhotos';
import TileGrid from '.';
import { mockPhotos } from '__mocks__/api/mockPhotos';
import userEvent from '@testing-library/user-event';

describe('TileGrid component', () => {
  it('renders all tiles', () => {
    const tiles = createTilesFromPhotos(mockPhotos);

    const { screen } = setupTests(TileGrid, { props: { tiles } });

    const allTiles = screen.getAllByTestId(/tile/);

    expect(allTiles.length).toBe(10);
  });

  it('flips a tile after two seconds when onFlipTile is called', async () => {

    //setup the TileGrid component with tiles prop
    const tiles = createTilesFromPhotos(mockPhotos);

    const { screen } = setupTests(TileGrid, { props: { tiles } });

    const user = userEvent.setup();

    //get the target tile element
    // const tile = screen.getAllByTestId(/tile/)[4];
    const tile = screen.getByTestId('tile-1');
    screen.debug(tile);
    //simulate a click on the target tile
    await user.click(screen.getByTestId('tile-1'));


    // expect(onFlipTile).toHaveBeenCalledTimes(1);

    
  });

});
