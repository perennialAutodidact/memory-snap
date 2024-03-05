import { setupTests } from 'helpers/tests';
import { createTilesFromPhotos } from 'helpers/createTilesFromPhotos';
import TileGrid from '.';
import { mockPhotos } from '__mocks__/api/mockPhotos';
import { within } from '@testing-library/dom';

describe('TileGrid component', () => {
  it('renders all tiles', () => {
    const tiles = createTilesFromPhotos(mockPhotos);

    const { screen } = setupTests(TileGrid, { props: { tiles } });

    const allTiles = within(screen.getByTestId('tile-grid')).getAllByTestId(
      /tile/i
    );

    expect(allTiles.length).toBe(10);
  });
});
