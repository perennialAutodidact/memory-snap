import { setupTests } from '@/utils';
import Tile from './Tile';
import { mockPhotos } from '@memory-snap/common/__mocks__';
import { createTilesFromPhotos } from '@/contexts/GameContext/utils';
import { baseState } from '@/contexts';

const { currentPlayer: player } = baseState.game;

describe('Tile component', () => {
  it('renders', () => {
    const tile = createTilesFromPhotos(mockPhotos)[0];
    const player = baseState.game.players[0];
    const props = { tile, player };

    const { screen } = setupTests(Tile, { props });
    expect(screen.getByTestId(/tile/)).toBeInTheDocument();
  });

  it('shows image if tile is face up', async () => {
    const tileIndex = 0;
    const tile = createTilesFromPhotos(mockPhotos, { shuffle: false })[
      tileIndex
    ];
    const player = baseState.game.players[0];
    const props = { tile: { ...tile, faceUp: true }, player };

    const { screen } = setupTests(Tile, { props });

    const altText = `tile-${tileIndex}: ${tile.photo.alt}`;
    expect(screen.getByAltText(altText)).toBeInTheDocument();
  });

  it('hides the image if tile is face down', async () => {
    const tile = createTilesFromPhotos(mockPhotos, { shuffle: false })[0];
    const player = baseState.game.players[0];
    const props = { tile: { ...tile, faceUp: false }, player };

    const { screen } = setupTests(Tile, { props });

    const element = screen.queryByRole('img');
    expect(element).not.toBeInTheDocument();
  });

  it('calls onFlip when clicked', async () => {
    const tile = createTilesFromPhotos(mockPhotos)[0];
    const onFlip = vi.fn();

    const { screen, user } = setupTests(Tile, {
      props: { tile, onFlip },
    });

    await user.click(screen.getByTestId(/tile/));
    expect(onFlip).toHaveBeenCalledTimes(1);
  });

  it('has the class matched when isMatched is true', async () => {
    const tile = createTilesFromPhotos(mockPhotos)[0];
    const props = { tile: { ...tile, isMatched: true }, player };

    const { screen } = setupTests(Tile, { props });
    expect(screen.getByTestId(`tile-${tile.id}`)).toHaveClass('matched');
  });
});
