import { setupTests } from 'utils';
import Tile from './Tile';
import { mockPhotos } from '__mocks__/api/mockPhotos';
import { createTilesFromPhotos } from 'contexts/GameContext/utils';
import { baseState } from 'contexts';
import userEvent from '@testing-library/user-event';

const { currentPlayer: player } = baseState.game;

describe('Tile component', () => {
  it('renders', () => {
    const tile = createTilesFromPhotos(mockPhotos)[0];

    const player = baseState.game.players[0];

    const props = { tile, player };

    const { screen } = setupTests(Tile, { props });
    expect(screen.getByTestId(/tile/)).toBeInTheDocument();
  });

  it('has alt text if faceUp is true', () => {
    const tile = createTilesFromPhotos(mockPhotos)[0];

    const player = baseState.game.players[0];

    const props = { tile: { ...tile, faceUp: true }, player };

    const { screen } = setupTests(Tile, { props });

    expect(screen.getByAltText(tile.photo.alt)).toBeInTheDocument();
  });

  it('does not have alt text if faceUp is false', () => {
    const tile = createTilesFromPhotos(mockPhotos, { shuffle: true })[0];

    const player = baseState.game.players[0];

    const props = { tile: { ...tile, faceUp: false }, player };

    const { screen } = setupTests(Tile, { props });

    const element = screen.findByRole('image', {});

    expect(element).not.toBeVisible();
  });

  it('calls onFlip when clicked', async () => {
    const tile = createTilesFromPhotos(mockPhotos)[0];

    const user = userEvent.setup();

    const onFlip = jest.fn();

    const { screen } = setupTests(Tile, { props: { tile, onFlip, player } });

    await user.click(screen.getByTestId(/tile/));

    expect(onFlip).toHaveBeenCalledTimes(1);
  });

  it('has the class matched when isMatched is true', () => {
    const tile = createTilesFromPhotos(mockPhotos)[0];

    const props = { tile: { ...tile, isMatched: true }, player };

    const { screen } = setupTests(Tile, { props });

    expect(screen.getByTestId(`tile-${tile.id}`)).toHaveClass('matched');
  });
});
