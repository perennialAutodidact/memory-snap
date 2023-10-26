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

});
