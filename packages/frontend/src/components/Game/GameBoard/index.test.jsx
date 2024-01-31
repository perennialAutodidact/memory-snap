import { setupTests } from 'helpers/tests';
import GameBoard from '.';
import { mockPhotos } from '__mocks__/api/mockPhotos';
import { createTilesFromPhotos } from 'helpers/createTilesFromPhotos';
import { baseState } from 'contexts';
import { produce } from 'immer';
import { act } from '@testing-library/react';
import { ui } from '__mocks__/api/ui';

beforeEach(() => {
  jest.useFakeTimers('legacy');
});

afterEach(() => {
  jest.useRealTimers();
});

const { tile, player } = ui;

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

  it('renders the result display component when the game is over', () => {
    const gameOverState = produce(baseState.game, (draft) => {
      draft.stage = 'GAME_OVER';
      draft.winner = [baseState.game.players[0]];
    });

    const state = { ...baseState, game: gameOverState };

    const { screen } = setupTests(GameBoard, { state });

    const tileGrid = screen.queryByTestId('tile-grid');
    const resultDisplay = screen.getByTestId('result-display');

    expect(tileGrid).toBe(null);
    expect(resultDisplay).toBeInTheDocument();
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

      expect(player.turnIndicator('Player 1').get()).toBeInTheDocument();

      await user.click(tile.container('tile-5').get());
      await user.click(tile.container('tile-2').get());
      act(() => jest.advanceTimersByTime(3000));

      expect(player.turnIndicator('Player 1').query()).toBeNull();

      expect(player.turnIndicator('Player 2').get()).toBeInTheDocument();
    });

    it('removes tiles and awards a point after a match', async () => {
      const tiles = createTilesFromPhotos(mockPhotos, { shuffle: false });

      const initialGameState = produce(baseState.game, (draft) => {
        draft.tiles = tiles;
      });

      const state = { ...baseState, game: initialGameState };

      const { user, screen } = setupTests(GameBoard, { state });

      const visibleTiles = screen.getAllByTestId(/tile-(?!grid\b)/);

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
