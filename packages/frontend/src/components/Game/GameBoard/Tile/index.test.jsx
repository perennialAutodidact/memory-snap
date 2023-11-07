import { setupTests } from 'helpers/tests';
import { produce } from 'immer';
import Tile from '.';
import { mockPhotos } from '__mocks__/api/mockPhotos';
import { createTilesFromPhotos } from 'helpers';
import { baseState } from 'contexts';
import userEvent from '@testing-library/user-event';

describe('Tile component', () => {
  it('renders', () => {
    const tile = createTilesFromPhotos(mockPhotos)[0];
    const props = { tile };

    const { screen } = setupTests(Tile, { props });
    expect(screen.getByTestId(/tile/)).toBeInTheDocument();
  });

  it('has alt text if faceUp is true', () => {
    const tile = createTilesFromPhotos(mockPhotos)[0];
    const props = { tile: { ...tile, faceUp: true } };

    const { screen } = setupTests(Tile, { props });

    expect(screen.getByAltText(tile.photo.alt)).toBeInTheDocument();
  });

  it('does not have alt text if faceUp is false', () => {
    const tile = createTilesFromPhotos(mockPhotos, { shuffle: true })[0];
    const props = { tile: { ...tile, faceUp: false } };

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
    const props = { tile: { ...tile, isMatched: true } };

    const { screen } = setupTests(Tile, { props });

    expect(screen.getByTestId(`tile-${tile.id}`)).toHaveClass('matched');
  });

  it('is not clickable while face up', async () => {
    const tile = createTilesFromPhotos(mockPhotos)[0];
    const props = { tile: { ...tile, faceUp: true } };

    const { screen } = setupTests(Tile, { props });

    const user = userEvent.setup();

    await user.click(screen.getByTestId(/tile/));

    expect(screen.getByTestId(/tile/)).toHaveClass('faceUp');
  });

  it('is not clickable when two other tiles are face up', async () => {
    const tiles = createTilesFromPhotos(mockPhotos, { shuffle: false });

    const tile = tiles[0];

    const flipped = [tiles[3], tiles[9]];

    const twoFlippedGameState = produce(baseState.game, (draft) => {
      draft.tiles = tiles;
      draft.flipped = flipped;
    });

    const state = { ...baseState, game: twoFlippedGameState };

    const onFlip = jest.fn();

    const { screen, user } = setupTests(
      Tile,
      { props: { tile, onFlip } },
      { state }
    );

    await user.click(screen.getByTestId(/tile/));

    expect(screen.getByTestId('tile-0')).not.toHaveClass('faceUp');
    expect(screen.queryByAltText(tiles[0].photo.alt)).not.toBeInTheDocument();
  });
});
