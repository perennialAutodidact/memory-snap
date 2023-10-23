import { setupTests } from 'helpers/tests';
import Tile from '.';
import { mockPhotos } from '__mocks__/api/mockPhotos';
import { createTilesFromPhotos } from 'helpers';
import userEvent from '@testing-library/user-event';

describe('Tile component', () => {
  it('renders', () => {
    const tile = createTilesFromPhotos(mockPhotos)[0];
    const props = { tile }

    const { screen } = setupTests(Tile, { props });
    expect(screen.getByTestId(/tile/)).toBeInTheDocument();
  });

  it('has alt text if faceUp is true', () => {
    const tile = createTilesFromPhotos(mockPhotos)[0];
    const props = { tile: {...tile, faceUp: true}};
    
    const { screen } = setupTests(Tile, { props });

    expect(screen.getByAltText(tile.photo.alt)).toBeInTheDocument();
  });

  it('does not have alt text if faceUp is false', () => {
    const tile = createTilesFromPhotos(mockPhotos, { shuffle: true })[0];
    const props = { tile: { ...tile, faceUp: false} };

    const { screen } = setupTests(Tile, { props });

    const element = screen.queryByAltText(tile.photo.alt);

    expect(element).not.toBeInTheDocument();
  });

  it('calls onFlip when clicked', async () => {
    const tile = createTilesFromPhotos(mockPhotos)[0];

    const user = userEvent.setup();

    const onFlip = jest.fn();

    const { screen } = setupTests(Tile, { props: { tile, onFlip } });

    await user.click(screen.getByTestId(/tile/));

    expect(onFlip).toHaveBeenCalledTimes(1);
  });

  it('has the class matched when isMatched is true', () => {
    const tile = createTilesFromPhotos(mockPhotos)[0];
    const props = { tile: {...tile, isMatched: true}};

    const { screen } = setupTests(Tile, { props });

    expect(screen.getByTestId(`tile-${tile.id}`)).toHaveClass('matched');
  })
});
