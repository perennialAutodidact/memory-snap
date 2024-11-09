import { isMatchingPair } from './isMatchingPair';
import { createTilesFromPhotos } from 'contexts/GameContext/utils';
import { mockPhotos } from '__mocks__/api/mockPhotos';

describe('isMatchingPair', () => {
  it('returns true if the tiles have the same photo id', () => {
    const tiles = createTilesFromPhotos(mockPhotos, false);
    const flipped = [tiles[0], tiles[1]];

    expect(isMatchingPair(flipped)).toBe(true);
  });

  it('returns false if the tiles do not have the same photo id', () => {
    const tiles = createTilesFromPhotos(mockPhotos, false);
    const flipped = [tiles[0], tiles[5]];

    expect(isMatchingPair(flipped)).toBe(false);
  });

  it('returns false if the flipped array is empty', () => {
    const flipped = [];
    expect(isMatchingPair(flipped)).toBe(false);
  });
});
