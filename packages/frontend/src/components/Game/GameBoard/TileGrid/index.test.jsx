import { setupTests } from 'helpers/tests';
import { createTilesFromPhotos } from 'helpers/createTilesFromPhotos';
import TileGrid from '.';
import { mockPhotos } from '__mocks__/api/mockPhotos';
import userEvent from "@testing-library/user-event";

describe('TileGrid component', () => {
  it('renders all tiles', () => {
    const tiles = createTilesFromPhotos(mockPhotos, true)
    
    const { screen } = setupTests(TileGrid, { props: { tiles } });

    const allTiles = screen.getAllByTestId(/tile/);

    expect(allTiles.length).toBe(10);
    screen.debug(allTiles)
  });

  it('toggles the faceUp value of a tile when clicked', async () => {
    const tiles = createTilesFromPhotos(mockPhotos, true)
    
    const user = userEvent.setup()
    const { screen } = setupTests(TileGrid, { props: { tiles }} );
    
    expect(screen.getByTestId('tile-1')).toHaveClass('faceDown');

    const aTile = screen.getByTestId('tile-1')
    
    await user.click(screen.getByTestId('tile-1'));

    expect(screen.getByTestId('tile-1')).toHaveClass('faceUp');

    expect(screen.getByAltText(photos[0].alt)).toBeInTheDocument();
    screen.debug(aTile)
  });
});
