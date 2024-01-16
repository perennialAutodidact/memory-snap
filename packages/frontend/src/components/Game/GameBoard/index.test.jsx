import { setupTests } from 'helpers/tests';
import GameBoard from '.';
import { mockPhotos } from '__mocks__/api/mockPhotos';
import { createTilesFromPhotos } from 'helpers/createTilesFromPhotos';
import { baseState } from 'contexts';
import { produce } from 'immer';
import { act } from '@testing-library/react';
import { byTestId, byAltText, byRole } from 'testing-library-selector';

beforeEach(() => {
  jest.useFakeTimers('legacy');
});

afterEach(() => {
  jest.useRealTimers();
});

const ui = {
  tile: {
    container: (testId) => byTestId(testId),
    photo: (altText) => byAltText(altText),
  },

  playerNote: byRole('note'),
};

const { tile, playerNote } = ui;

describe('GameBoard component', () => {
  it('flips the tile thats been clicked', async () => {
    const tiles = createTilesFromPhotos(mockPhotos, { shuffle: false });

    const initialGameState = produce(baseState.game, (draft) => {
      draft.tiles = tiles;
    });
    const state = { ...baseState, game: initialGameState };

    const { user } = setupTests(GameBoard, { state });

    expect(tile.container('tile-1').get()).toHaveClass('faceDown');
    await user.click(tile.container('tile-1').get());

    expect(tile.container('tile-1').get()).not.toHaveClass('faceDown');
    expect(tile.photo(tiles[1].photo.alt).get()).toBeInTheDocument();
  });

  it('unmatched tiles are flipped back after two seconds', async () => {
    const tiles = createTilesFromPhotos(mockPhotos, { shuffle: false });

    const initialGameState = produce(baseState.game, (draft) => {
      draft.tiles = tiles;
    });
    const state = { ...baseState, game: initialGameState };

    const { user } = setupTests(GameBoard, { state });

    expect(tile.container('tile-1').get()).toHaveClass('faceDown');

    await user.click(tile.container('tile-1').get());
    await user.click(tile.container('tile-5').get());

    expect(tile.photo(tiles[1].photo.alt).get()).toBeInTheDocument();
    expect(tile.photo(tiles[5].photo.alt).get()).toBeInTheDocument();

    act(() => jest.advanceTimersByTime(3000));

    expect(tile.container('tile-1').get()).toHaveClass('faceDown');
    expect(tile.container('tile-5').get()).toHaveClass('faceDown');

    expect(tile.photo(tiles[1].photo.alt).query()).not.toBeInTheDocument();
    expect(tile.photo(tiles[5].photo.alt).query()).not.toBeInTheDocument();
  });

  it('will not flip a tile to face down with second click', async () => {
    const tiles = createTilesFromPhotos(mockPhotos, { shuffle: false });

    const tilesState = produce(baseState.game, (draft) => {
      draft.tiles = tiles;
    });

    const state = { ...baseState, game: tilesState };

    const { user } = setupTests(GameBoard, { state });

    expect(tile.container('tile-0').get()).toHaveClass('faceDown');

    await user.click(tile.container('tile-0').get());

    expect(tile.container('tile-0').get()).toHaveClass('faceUp');

    await user.click(tile.container('tile-0').get());

    expect(tile.container('tile-0').get()).toHaveClass('faceUp');
  });

  it('will not flip a tile if two others are flipped', async () => {
    const tiles = createTilesFromPhotos(mockPhotos, { shuffle: false });

    const initialGameState = produce(baseState.game, (draft) => {
      draft.tiles = tiles;
    });

    const state = { ...baseState, game: initialGameState };

    const { user } = setupTests(GameBoard, { state });

    expect(tile.container('tile-0').get()).not.toHaveClass('faceUp');

    await user.click(tile.container('tile-0').get());

    expect(tile.container('tile-0').get()).toHaveClass('faceUp');

    expect(tile.container('tile-5').get()).not.toHaveClass('faceUp');

    await user.click(tile.container('tile-5').get());

    expect(tile.container('tile-5').get()).toHaveClass('faceUp');

    await user.click(tile.container('tile-7').get());
    expect(tile.container('tile-7').get()).not.toHaveClass('faceUp');
  });

  describe('player turn', () => {
    it('does not award a point for a non match', async () => {
      const tiles = createTilesFromPhotos(mockPhotos, { shuffle: false });

      const initialGameState = produce(baseState.game, (draft) => {
        draft.tiles = tiles;
      });

      const state = { ...baseState, game: initialGameState };

      const { user, screen } = setupTests(GameBoard, { state });

      const currentPlayerScore = screen.getByTestId('player-score-1');

      expect(currentPlayerScore).toHaveTextContent('0');

      await user.click(tile.container('tile-5').get());
      await user.click(tile.container('tile-2').get());
      act(() => jest.advanceTimersByTime(3000));

      const updatedScore = screen.getByTestId('player-score-1');
      expect(updatedScore).toHaveTextContent('0');
    });

    it('changes the active player after each turn', async () => {
      const tiles = createTilesFromPhotos(mockPhotos, { shuffle: false });

      const initialGameState = produce(baseState.game, (draft) => {
        draft.tiles = tiles;
      });

      const state = { ...baseState, game: initialGameState };

      const { user } = setupTests(GameBoard, { state });

      expect(playerNote.get()).toHaveTextContent('name: Player 1');

      await user.click(tile.container('tile-5').get());
      await user.click(tile.container('tile-2').get());
      act(() => jest.advanceTimersByTime(3000));

      expect(playerNote.get()).not.toHaveTextContent('name: Player 1');

      expect(playerNote.get()).toHaveTextContent('name: Player 2');
    });

    it('removes tiles and awards a point after a match', async () => {
      const tiles = createTilesFromPhotos(mockPhotos, { shuffle: false });

      const initialGameState = produce(baseState.game, (draft) => {
        draft.tiles = tiles;
      });

      const state = { ...baseState, game: initialGameState };

      const { user, screen } = setupTests(GameBoard, { state });

      const visibleTiles = screen.getAllByTestId(/tile/);
      expect(visibleTiles.length).toBe(10);

      const playerOneScore = screen.getByTestId('player-score-1');
      expect(playerOneScore).toHaveTextContent('0');

      await user.click(tile.container('tile-0').get());
      await user.click(tile.container('tile-1').get());
      act(() => jest.advanceTimersByTime(3000));

      expect(tile.container('tile-0').get()).toHaveClass('matched');
      expect(tile.container('tile-1').get()).toHaveClass('matched');

      const updatedPlayerOneScore = screen.getByTestId('player-score-1');
      expect(updatedPlayerOneScore).toHaveTextContent('1');
    });
  });
});
