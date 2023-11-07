import { setupTests } from 'helpers/tests';
import GameBoard from '.';
import { mockPhotos } from '__mocks__/api/mockPhotos';
import { createTilesFromPhotos } from 'helpers/createTilesFromPhotos';
import { baseState } from 'contexts';
import { produce } from 'immer';
import { act } from '@testing-library/react';
import { byTestId, byAltText } from 'testing-library-selector';

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
};

const { tile } = ui;

describe('GameBoard component', () => {
  it('flips the tile thats been clicked', async () => {
    const tiles = createTilesFromPhotos(mockPhotos, { shuffle: false });

    const initialGameState = produce(baseState.game, (draft) => {
      draft.tiles = tiles;
    });
    const state = { ...baseState, game: initialGameState };

    const { screen, user } = setupTests(GameBoard, { state });

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
});
