import { lockTiles, unlockTiles } from "./lockTiles";
import { createTilesFromPhotos } from "./createTilesFromPhotos";
import { mockPhotos } from "@memory-snap/common/__mocks__";

describe("lockTiles", () => {
  it("returns an array the length of the array it is given", () => {
    const tiles = createTilesFromPhotos(mockPhotos);

    const lockedTiles = lockTiles(tiles);

    expect(lockedTiles.length).toEqual(tiles.length);
  });

  it("changes the is flippable value for each tile to false", () => {
    const tiles = createTilesFromPhotos(mockPhotos);

    const allTilesAreFlippable = !tiles.some(
      (tile) => tile.isFlippable === false,
    );
    expect(allTilesAreFlippable).toBe(true);

    const lockedTiles = lockTiles(tiles);

    const aTileIsFlippable = lockedTiles.some(
      (tile) => tile.isFlippable === true,
    );

    expect(aTileIsFlippable).toBe(false);
  });
});

describe("unlockTiles", () => {
  it("returns an array the length of the array it is given", () => {
    const tiles = createTilesFromPhotos(mockPhotos);

    const unlockedTiles = unlockTiles(tiles);

    expect(unlockedTiles.length).toEqual(tiles.length);
  });

  it("changes the is flippable value for each tile to true", () => {
    const tiles = createTilesFromPhotos(mockPhotos);

    const lockedTiles = lockTiles(tiles);

    const aTileIsUnlocked = lockedTiles.some(
      (tile) => tile.isFlippable === true,
    );

    expect(aTileIsUnlocked).toBe(false);

    const unlockedTiles = unlockTiles(lockedTiles);

    const allTilesAreFlippable = !unlockedTiles.some(
      (tile) => tile.isFlippable === false,
    );

    expect(allTilesAreFlippable).toBe(true);
  });
});
