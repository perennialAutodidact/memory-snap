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
    tile1: byTestId('tile-1'),
    tile2: byTestId('tile-5'),
    tileAlt1: byAltText(/Jellyfish/),
    tileAlt2: byAltText(/Splashing/),
  };

  it('unmatched tiles are flipped back after two seconds', async () => {
    const tiles = createTilesFromPhotos(mockPhotos, { shuffle: false });

    const initialGameState = produce(baseState.game, (draft) => {
      draft.tiles = tiles;
    });
    const state = { ...baseState, game: initialGameState };

    const { user } = setupTests(GameBoard, { state });

    expect(ui.tile1.get()).toHaveClass('faceDown');

    await user.click(ui.tile1.get());
    await user.click(ui.tile2.get());

    expect(ui.tileAlt1.get()).toBeInTheDocument();
    expect(ui.tileAlt2.get()).toBeInTheDocument();

    act(() => jest.advanceTimersByTime(3000));

    expect(ui.tile1.get()).toHaveClass('faceDown');
    expect(ui.tile2.get()).toHaveClass('faceDown');

    expect(ui.tileAlt1.query()).toBeNull();
    expect(ui.tileAlt2.query()).toBeNull();
  });
});
