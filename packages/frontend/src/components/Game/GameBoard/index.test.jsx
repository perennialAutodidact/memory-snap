import { setupTests } from 'helpers/tests';
import GameBoard from '.';
import { mockPhotos } from '__mocks__/api/mockPhotos';
import { createTilesFromPhotos } from 'helpers/createTilesFromPhotos';
import { baseState } from 'contexts';
import { produce } from 'immer';
import { waitFor, act } from '@testing-library/react';

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

  it('unmatched tiles are flipped back after two seconds', async () => {
    const tiles = createTilesFromPhotos(mockPhotos, { shuffle: false });

    const initialGameState = produce(baseState.game, (draft) => {
      draft.tiles = tiles;
    });
    const state = { ...baseState, game: initialGameState };

    const { screen, user } = setupTests(GameBoard, { state });

    const element1 = screen.getByTestId('tile-1');
    const element2 = screen.getByTestId('tile-5');

    expect(screen.getByTestId('tile-1')).toHaveClass('faceDown');

    await user.click(element1);
    await user.click(element2);

    expect(screen.getByAltText(/Jellyfish/)).toBeInTheDocument();
    expect(screen.getByAltText(/Splashing/)).toBeInTheDocument();

    act(() => jest.advanceTimersByTime(3000));

    expect(screen.getByTestId('tile-1')).toHaveClass('faceDown');
    expect(screen.getByTestId('tile-5')).toHaveClass('faceDown');

    expect(screen.queryByAltText(/Jellyfish/)).toBeNull();
    expect(screen.queryByAltText(/Splashing/)).toBeNull();
  });
});
