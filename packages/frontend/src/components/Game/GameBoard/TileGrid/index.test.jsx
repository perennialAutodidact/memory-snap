import { setupTests } from 'helpers/tests';
import { createTiles } from 'helpers/createTiles';
import TileGrid from '.';
import { mockPhotos } from '__mocks__/api/mockPhotos';

describe('TileGrid component', () => {
  it('renders all tiles', () => {
    const tiles = createTiles(mockPhotos)
    const { screen } = setupTests(TileGrid, { props: { tiles } });

    const allTiles = screen.getAllByTestId(/tile/);

    expect(allTiles.length).toBe(10);
  });
});