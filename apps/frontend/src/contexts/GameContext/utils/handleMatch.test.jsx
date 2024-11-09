import { handleMatch } from './handleMatch';
import { createTilesFromPhotos } from './createTilesFromPhotos';
import { mockPhotos } from '__mocks__/api/mockPhotos';

describe('handleMatch', () => {
  it('returns an array the same length as the tiles array it is given', () => {
    const tiles = createTilesFromPhotos(mockPhotos, false);
    const flipped = [tiles[0], tiles[4]];

    expect(handleMatch(tiles, flipped).length).toEqual(tiles.length);
  });

  it('changes the isMatched value to true for both tiles in the flipped array', () => {
    const tiles = createTilesFromPhotos(mockPhotos, false);
    const flipped = [tiles[0], tiles[4]];

    expect(tiles[0].isMatched).toBe(false);
    expect(tiles[4].isMatched).toBe(false);

    const result = handleMatch(tiles, flipped);

    expect(result[0].isMatched).toBe(true);
    expect(result[4].isMatched).toBe(true);
  });

  it('filters out matched tiles and adds them to the matched array', () => {
    const tiles = createTilesFromPhotos(mockPhotos, { shuffle: false });
    const flipped = [tiles[0], tiles[4]];

    const result = handleMatch(tiles, flipped);
    const expected = tiles.filter(tile =>
      [tiles[0].id, tiles[4].id].includes(tile.id)
    );

    expect(result.length).toBe(expected.length);
    expect(result.includes(tiles[0])).toBe(false);
    expect(result.includes(tiles[4])).toBe(false);
  });
});
