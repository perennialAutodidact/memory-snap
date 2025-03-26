import { act } from 'react';
import { waitFor } from '@testing-library/react';
import { produce } from 'immer';
import { setupTests, ui } from '@/utils';
import GameBoard from './GameBoard';
import { mockPhotos } from '@memory-snap/common/__mocks__';
import { createTilesFromPhotos } from '@/contexts/GameContext/utils/createTilesFromPhotos';
import { baseState } from '@/contexts';

const {
  pages: {
    game: { gameBoard, scoreBoard },
  },
} = ui;
const tiles = createTilesFromPhotos(mockPhotos, { shuffle: false });
const state = produce(baseState, (draft) => {
  draft.game.tiles.all = tiles;
  draft.photos.photos = mockPhotos;
});

const [player1, player2] = state.game.players;

describe('GameBoard component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  it('flips the tile thats been clicked', async () => {
    const { user } = setupTests(GameBoard, { state });
    const tile1 = gameBoard.tile.container('tile-1');
    expect(tile1.get()).toHaveClass('faceDown');

    await user.click(tile1.get());
    expect(tile1.get()).toHaveClass('faceUp');
    expect(
      gameBoard.tile.photo(tiles[1].photo.altText).get(),
    ).toBeInTheDocument();
  });

  it('unmatched tiles are flipped back after two seconds', async () => {
    const { user } = setupTests(GameBoard, { state });
    const tile1 = gameBoard.tile.container('tile-1');
    const tile5 = gameBoard.tile.container('tile-5');

    expect(tile1.get()).toHaveClass('faceDown');
    expect(tile5.get()).toHaveClass('faceDown');
    await user.click(tile1.get());
    await user.click(tile5.get());

    expect(tile1.get()).toHaveClass('faceUp');
    expect(tile5.get()).toHaveClass('faceUp');
    expect(
      gameBoard.tile
        .photo(tiles[1].photo.altText)
        .getAll()[0]
        .hasAttribute('aria-hidden', false),
    ).toBe(true);
    expect(
      gameBoard.tile
        .photo(tiles[5].photo.altText)
        .getAll()[0]
        .hasAttribute('aria-hidden', false),
    ).toBe(true);

    await act(() => vi.advanceTimersByTime(3000));
    expect(tile1.get()).toHaveClass('faceDown');
    expect(tile5.get()).toHaveClass('faceDown');
    expect(
      gameBoard.tile
        .photo(tiles[1].photo.altText)
        .query()
        .hasAttribute('aria-hidden', true),
    ).toBe(true);
    expect(
      gameBoard.tile
        .photo(tiles[5].photo.altText)
        .query()
        .hasAttribute('aria-hidden', true),
    ).toBe(true);
  });

  it('will not flip a tile to face down with second click', async () => {
    const { user } = setupTests(GameBoard, { state });

    expect(gameBoard.tile.container('tile-0').get()).toHaveClass('faceDown');

    await user.click(gameBoard.tile.container('tile-0').get());

    expect(gameBoard.tile.container('tile-0').get()).toHaveClass('faceUp');

    await user.click(gameBoard.tile.container('tile-0').get());

    expect(gameBoard.tile.container('tile-0').get()).toHaveClass('faceUp');
  });

  it('will not flip a tile if two others are flipped', async () => {
    const { user } = setupTests(GameBoard, { state });

    expect(gameBoard.tile.container('tile-0').get()).not.toHaveClass('faceUp');

    await user.click(gameBoard.tile.container('tile-0').get());

    expect(gameBoard.tile.container('tile-0').get()).toHaveClass('faceUp');

    expect(gameBoard.tile.container('tile-5').get()).not.toHaveClass('faceUp');

    await user.click(gameBoard.tile.container('tile-5').get());

    expect(gameBoard.tile.container('tile-5').get()).toHaveClass('faceUp');

    await user.click(gameBoard.tile.container('tile-7').get());
    expect(gameBoard.tile.container('tile-7').get()).not.toHaveClass('faceUp');
  });

  describe('player turn', () => {
    it('does not award a point for a non match', async () => {
      const { user, screen } = setupTests(GameBoard, { state });

      const currentPlayerScore = screen.getByTestId('player-score-1');

      expect(currentPlayerScore).toHaveTextContent('0');

      await user.click(gameBoard.tile.container('tile-5').get());
      await user.click(gameBoard.tile.container('tile-2').get());
      act(() => vi.advanceTimersByTime(3000));

      const updatedScore = screen.getByTestId('player-score-1');
      expect(updatedScore).toHaveTextContent('0');
    });

    it('removes tiles and awards a point after a match', async () => {
      const { user, screen } = setupTests(GameBoard, { state });

      const visibleTiles = screen.getAllByTestId(/tile-[0-9]/);

      expect(visibleTiles.length).toBe(10);

      const playerOneScore = screen.getByTestId('player-score-1');
      expect(playerOneScore).toHaveTextContent('0');

      const tile0 = gameBoard.tile.container('tile-0');
      const tile1 = gameBoard.tile.container('tile-1');
      const tilePhoto0 = gameBoard.tile.photo('tile-0');
      const tilePhoto1 = gameBoard.tile.photo('tile-1');

      await act(async () => {
        await user.click(tile0.get());
        await user.click(tile1.get());
      });

      act(() => vi.advanceTimersByTime(4000));
      await waitFor(() => {
        expect(tilePhoto0.query()).not.toBeInTheDocument();
        expect(tilePhoto1.query()).not.toBeInTheDocument();
        const updatedPlayerOneScore = screen.getByTestId('player-score-0');
        expect(updatedPlayerOneScore).toHaveTextContent('1');
      });
    });

    it('will not flip a tile if two others are flipped', async () => {
      const { user } = setupTests(GameBoard, { state });

      expect(gameBoard.tile.container('tile-0').get()).not.toHaveClass(
        'faceUp',
      );

      await user.click(gameBoard.tile.container('tile-0').get());

      expect(gameBoard.tile.container('tile-0').get()).toHaveClass('faceUp');

      expect(gameBoard.tile.container('tile-5').get()).not.toHaveClass(
        'faceUp',
      );

      await user.click(gameBoard.tile.container('tile-5').get());

      expect(gameBoard.tile.container('tile-5').get()).toHaveClass('faceUp');

      await user.click(gameBoard.tile.container('tile-7').get());
      expect(gameBoard.tile.container('tile-7').get()).not.toHaveClass(
        'faceUp',
      );
    });

    it('does not change the current player if a match is made', async () => {
      const { user } = setupTests(GameBoard, { state });

      expect(
        scoreBoard.player.turnIndicator(player1).get(),
      ).toBeInTheDocument();

      await act(async () => {
        await user.click(gameBoard.tile.container('tile-0').get());
        await user.click(gameBoard.tile.container('tile-1').get());
      });

      expect(
        scoreBoard.player.turnIndicator(player1).get(),
      ).toBeInTheDocument();
    });

    it('changes the current player if a match is not made', async () => {
      const { user } = setupTests(GameBoard, { state });

      expect(
        scoreBoard.player.turnIndicator(player1).get(),
      ).toBeInTheDocument();

      await user.click(gameBoard.tile.container('tile-0').get());
      await user.click(gameBoard.tile.container('tile-3').get());

      await act(() => vi.advanceTimersByTime(3000));

      expect(
        scoreBoard.player.turnIndicator(player2).get(),
      ).toBeInTheDocument();
    });
  });
});
