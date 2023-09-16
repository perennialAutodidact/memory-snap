import { setupTests } from 'helpers/tests';
import { mockPhotos } from '__mocks__/api/mockPhotos';
import TileGrid from '.';

describe('TileGrid component', () => {
  it('renders all tiles', () => {
    const { screen } = setupTests(TileGrid, { props: { tiles: mockPhotos } });

    const allTiles = screen.getAllByTestId('tileTest');

    expect(allTiles.length).toBe(5);
  });
});
