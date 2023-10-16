import { setupTests } from 'helpers/tests';
import { createTilesFromPhotos } from 'helpers/createTilesFromPhotos';
import TileGrid from '.';
import { mockPhotos } from '__mocks__/api/mockPhotos';
import userEvent from "@testing-library/user-event";

describe('TileGrid component', () => {
  it('renders all tiles', () => {
    //TODO: adjust this test after the providers change ticket
    
    // const tiles = createTilesFromPhotos(mockPhotos, true)
    const photos = mockPhotos
    const { screen } = setupTests(TileGrid, { props: { photos } });

    const allTiles = screen.getAllByTestId(/tile/);

    expect(allTiles.length).toBe(10);
  });

  it('toggles the faceUp value of a tile when clicked', async () => {
    const photos = mockPhotos
    const user = userEvent.setup()

    const { screen } = setupTests(TileGrid, { props: { photos } });
    
    expect(screen.getByTestId('tile-1')).toHaveClass('faceDown');

    await user.click(screen.getByTestId('tile-1'));

    expect(screen.getByTestId('tile-1')).toHaveClass('faceUp');

    expect(screen.getByAltText(photos[0].alt)).toBeInTheDocument();
  });
});
