import { createTilesFromPhotos } from 'helpers';
import { mockPhotos } from '__mocks__/api/mockPhotos';

describe('createTilesFromPhotos', () => {
  it('returns an array double the length of the array its given', () => {
    const photos = mockPhotos;

    const shuffledTiles = createTilesFromPhotos(photos, { shuffle: true });
    const unshuffledTiles = createTilesFromPhotos(photos, { shuffle: false });

    const tilePhotos = shuffledTiles.map(tile => {
      return tile.photo;
    });

    expect(photos.length * 2).toEqual(tilePhotos.length);
    expect(shuffledTiles.length).toEqual(unshuffledTiles.length);
    expect(shuffledTiles).not.toMatchObject(unshuffledTiles);

    const sortById = (array, key) => {
      return array.sort((a, b) => {
        let x = a[key];
        let y = b[key];
        return x < y ? -1 : x > y ? 1 : 0;
      });
    };

    expect(sortById(shuffledTiles, 'id')).toMatchObject(unshuffledTiles);
  });

  it('returns an array of unshuffled tiles if shuffle is false', () => {
    const photos = mockPhotos;

    const unshuffledTiles = createTilesFromPhotos(photos, { shuffle: false });

    for (let i = 0; i < unshuffledTiles.length - 2; i += 2) {
      const [tile1, tile2] = unshuffledTiles.slice(i, i + 2);
      expect({ ...tile1, id: i + 1 }).toMatchObject(tile2);
    }
  });

  it('returns an array of shuffled tiles if shuffle is true', () => {
    const photos = mockPhotos;

    const unshuffledTiles = createTilesFromPhotos(photos, { shuffle: false });

    for (let i = 0; i < unshuffledTiles.length - 2; i += 2) {
      const [tile1, tile2] = unshuffledTiles.slice(i, i + 2);
      expect({ ...tile1, id: i + 1 }).toMatchObject(tile2);
    }
  });
});
