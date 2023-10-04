import { setupTests } from 'helpers/tests';
import { createTilesFromPhotos } from 'helpers/createTilesFromPhotos';
import TileGrid from '.';
import { mockPhotos } from '__mocks__/api/mockPhotos';

describe('TileGrid component', () => {
  it('renders all tiles', () => {
    //TODO: adjust this test after the providers change ticket
    
    // const tiles = createTilesFromPhotos(mockPhotos, true)
    const photos = mockPhotos
    const { screen } = setupTests(TileGrid, { props: { photos } });

    const allTiles = screen.getAllByTestId(/tile/);

    expect(allTiles.length).toBe(10);
  });
});
