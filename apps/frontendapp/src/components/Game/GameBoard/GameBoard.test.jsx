import { act } from "react";
import { setupTests } from "@/utils";
import GameBoard from "./GameBoard";
import { mockPhotos } from "@memory-snap/common/__mocks__";
import { createTilesFromPhotos } from "@/contexts/GameContext/utils/createTilesFromPhotos";
import { baseState } from "@/contexts";
import { produce } from "immer";
import { ui } from "@/utils";

const { tile, player } = ui;
const tiles = createTilesFromPhotos(mockPhotos, { shuffle: false });
const state = produce(baseState, (draft) => {
  draft.game.tiles = tiles;
  draft.photos.photos = mockPhotos;
});

describe("GameBoard component", () => {
  beforeEach(() => {
    // vi.useFakeTimers("legacy");
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("flips the tile thats been clicked", async () => {
    const { user } = setupTests(GameBoard, { state });

    const tile1 = tile.container("tile-1").get();
    expect(tile1).toHaveClass("faceDown");
    await user.click(tile.container("tile-1").get());

    expect(tile1).not.toHaveClass("faceDown");
    expect(tile.photo(tiles[1].photo.alt).get()).toBeInTheDocument();
  });

  it("unmatched tiles are flipped back after two seconds", async () => {
    const { user } = setupTests(GameBoard, { state });

    expect(tile.container("tile-1").get()).toHaveClass("faceDown");

    await user.click(tile.container("tile-1").get());
    await user.click(tile.container("tile-5").get());

    expect(tile.container("tile-1").get()).toHaveClass("faceDown");
    expect(tile.container("tile-5").get()).toHaveClass("faceDown");
    expect(tile.photo(tiles[1].photo.alt).get()).toBeInTheDocument();
    expect(tile.photo(tiles[5].photo.alt).get()).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(3000);
      expect(tile.container("tile-1").get()).toHaveClass("faceDown");
      expect(tile.container("tile-5").get()).toHaveClass("faceDown");

      expect(tile.photo(tiles[1].photo.alt).query()).not.toBeInTheDocument();
      expect(tile.photo(tiles[5].photo.alt).query()).not.toBeInTheDocument();
    });
  });

  it("will not flip a tile to face down with second click", async () => {
    const { user } = setupTests(GameBoard, { state });

    expect(tile.container("tile-0").get()).toHaveClass("faceDown");

    await user.click(tile.container("tile-0").get());

    expect(tile.container("tile-0").get()).toHaveClass("faceUp");

    await user.click(tile.container("tile-0").get());

    expect(tile.container("tile-0").get()).toHaveClass("faceUp");
  });

  it("will not flip a tile if two others are flipped", async () => {
    const { user } = setupTests(GameBoard, { state });

    expect(tile.container("tile-0").get()).not.toHaveClass("faceUp");

    await user.click(tile.container("tile-0").get());

    expect(tile.container("tile-0").get()).toHaveClass("faceUp");

    expect(tile.container("tile-5").get()).not.toHaveClass("faceUp");

    await user.click(tile.container("tile-5").get());

    expect(tile.container("tile-5").get()).toHaveClass("faceUp");

    await user.click(tile.container("tile-7").get());
    expect(tile.container("tile-7").get()).not.toHaveClass("faceUp");
  });

  describe("player turn", () => {
    it("does not award a point for a non match", async () => {
      const { user, screen } = setupTests(GameBoard, { state });

      const currentPlayerScore = screen.getByTestId("player-score-1");

      expect(currentPlayerScore).toHaveTextContent("0");

      await user.click(tile.container("tile-5").get());
      await user.click(tile.container("tile-2").get());
      act(() => vi.advanceTimersByTime(3000));

      const updatedScore = screen.getByTestId("player-score-1");
      expect(updatedScore).toHaveTextContent("0");
    });

    it("removes tiles and awards a point after a match", async () => {
      const { user, screen } = setupTests(GameBoard, { state });

      const visibleTiles = screen.getAllByTestId(/tile-(?!grid\b)/);

      expect(visibleTiles.length).toBe(10);

      const playerOneScore = screen.getByTestId("player-score-1");
      expect(playerOneScore).toHaveTextContent("0");

      await user.click(tile.container("tile-0").get());
      await user.click(tile.container("tile-1").get());
      act(() => vi.advanceTimersByTime(3000));

      expect(tile.container("tile-0").get()).toHaveClass("matched");
      expect(tile.container("tile-1").get()).toHaveClass("matched");

      const updatedPlayerOneScore = screen.getByTestId("player-score-1");
      expect(updatedPlayerOneScore).toHaveTextContent("1");
    });

    it("will not flip a tile if two others are flipped", async () => {
      const { user } = setupTests(GameBoard, { state });

      expect(tile.container("tile-0").get()).not.toHaveClass("faceUp");

      await user.click(tile.container("tile-0").get());

      expect(tile.container("tile-0").get()).toHaveClass("faceUp");

      expect(tile.container("tile-5").get()).not.toHaveClass("faceUp");

      await user.click(tile.container("tile-5").get());

      expect(tile.container("tile-5").get()).toHaveClass("faceUp");

      await user.click(tile.container("tile-7").get());
      expect(tile.container("tile-7").get()).not.toHaveClass("faceUp");
    });

    it("does not change the current player if a match is made", async () => {
      const { user } = setupTests(GameBoard, { state });

      expect(player.turnIndicator("Player 1").get()).toBeInTheDocument();

      await user.click(tile.container("tile-0").get());
      await user.click(tile.container("tile-1").get());

      expect(player.turnIndicator("Player 1").get()).toBeInTheDocument();
    });

    it("changes the current player if a match is not made", async () => {
      const { user } = setupTests(GameBoard, { state });

      expect(player.turnIndicator("Player 1").get()).toBeInTheDocument();

      await user.click(tile.container("tile-0").get());
      await user.click(tile.container("tile-3").get());

      act(() => vi.advanceTimersByTime(3000));

      expect(player.turnIndicator("Player 2").get()).toBeInTheDocument();
    });
  });
});
