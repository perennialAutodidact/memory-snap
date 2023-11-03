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

jest.spyOn(global, 'setTimeout');

describe('GameBoard component', () => {
  it('flips the tile thats been clicked', async () => {
    const tiles = createTilesFromPhotos(mockPhotos, { shuffle: false });

    const initialGameState = produce(baseState.game, (draft) => {
      draft.tiles = tiles;
    });
    const state = { ...baseState, game: initialGameState };

    const { screen, user } = setupTests(GameBoard, { state });

    const element = screen.getByTestId('tile-1');

    expect(screen.getByTestId('tile-1')).toHaveClass('faceDown');
    await user.click(element);

    jest.advanceTimersByTime(3000);

    const displayedImage = document.querySelector('img');

    expect(screen.getByTestId('tile-1')).not.toHaveClass('faceDown');
    expect(screen.getByAltText(/Jellyfish/)).toBeInTheDocument();
    expect(displayedImage).toBeInTheDocument();
  });

  const ui = {
    tile1: {
      container: byTestId('tile-1'),
      photo: byAltText(/Jellyfish/),
    },
    tile2: {
      container: byTestId('tile-5'),
      photo: byAltText(/Splashing/),
    },
  };

  const {tile1, tile2} = ui

  it('unmatched tiles are flipped back after two seconds', async () => {
    const tiles = createTilesFromPhotos(mockPhotos, { shuffle: false });

    const initialGameState = produce(baseState.game, (draft) => {
      draft.tiles = tiles;
    });
    const state = { ...baseState, game: initialGameState };

    const { user } = setupTests(GameBoard, { state });

    expect(tile1.container.get()).toHaveClass('faceDown');

    await user.click(tile1.container.get());
    await user.click(tile2.container.get());

    expect(tile1.photo.get()).toBeInTheDocument();
    expect(tile2.photo.get()).toBeInTheDocument();

    act(() => jest.advanceTimersByTime(3000));

    expect(tile1.container.get()).toHaveClass('faceDown');
    expect(tile2.container.get()).toHaveClass('faceDown');

    expect(tile1.photo.query()).toBeNull();
    expect(tile2.photo.query()).toBeNull();
  });
});
