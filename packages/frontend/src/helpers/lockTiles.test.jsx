import { lockTiles, unlockTiles } from './lockTiles';
import { createTilesFromPhotos } from './createTilesFromPhotos';
import { mockPhotos } from '__mocks__/api/mockPhotos';

describe('lockTiles', () => {
  it('returns an array the length of the array it is given', () => {
    const tiles = createTilesFromPhotos(mockPhotos);

    const lockedTiles = lockTiles(tiles);

    expect(lockedTiles.length).toEqual(tiles.length);
  });

  it('changes the is flippable value for each tile to false', () => {
    const tiles = createTilesFromPhotos(mockPhotos);

    const flippableTiles = tiles.filter((tile) => tile.isFlippable === true);
    expect(flippableTiles.length).toEqual(tiles.length);

    const lockedTiles = lockTiles(tiles);

    const flippableLockedTiles = lockedTiles.filter(
      (tile) => tile.isFlippable === true
    );

    expect(flippableLockedTiles.length).toBe(0);
  });
});

describe('unlockTiles', () => {
  it('returns an array the length of the array it is given', () => {
    const tiles = createTilesFromPhotos(mockPhotos);

    const unlockedTiles = unlockTiles(tiles);

    expect(unlockedTiles.length).toEqual(tiles.length);
  });

  it('changes the is flippable value for each tile to true', () => {
    const tiles = createTilesFromPhotos(mockPhotos);

    const lockedTiles = lockTiles(tiles);

    const flippableLockedTiles = lockedTiles.filter(
      (tile) => tile.isFlippable === true
    );

    expect(flippableLockedTiles.length).toBe(0);

    const unlockedTiles = unlockTiles(lockedTiles);

    const flippableUnLockedTiles = unlockedTiles.filter(
      (tile) => tile.isFlippable === true
    );

    expect(flippableUnLockedTiles.length).toEqual(tiles.length);
  });
});
