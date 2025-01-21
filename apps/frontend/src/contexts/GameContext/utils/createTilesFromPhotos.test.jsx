import _ from 'lodash';
import { createTilesFromPhotos } from '@/contexts/GameContext/utils';
import { mockPhotos } from '@memory-snap/common/__mocks__';

describe('createTilesFromPhotos', () => {
  it('returns an array double the length of the array its given', () => {
    const photos = mockPhotos;

    const shuffledTiles = createTilesFromPhotos(photos, { shuffle: true });
    const unshuffledTiles = createTilesFromPhotos(photos, { shuffle: false });

    const tilePhotos = shuffledTiles.map((tile) => {
      return tile.photo;
    });

    expect(photos.length * 2).toEqual(tilePhotos.length);
    expect(shuffledTiles.length).toEqual(unshuffledTiles.length);
    expect(shuffledTiles).not.toMatchObject(unshuffledTiles);

    expect(_.sortBy(shuffledTiles, 'id')).toMatchObject(unshuffledTiles);
  });

  it('returns an array of unshuffled tiles if shuffle is false', () => {
    const photos = mockPhotos.flatMap((photo) => [photo, photo]);

    const unshuffledTiles = createTilesFromPhotos(mockPhotos, {
      shuffle: false,
    });

    const tilePhotoHasSamePositionAsOriginalPhoto = (tile, index) =>
      tile.photo.id === photos[index].id;

    expect(unshuffledTiles.every(tilePhotoHasSamePositionAsOriginalPhoto)).toBe(
      true,
    );
  });

  it('returns an array of shuffled tiles if shuffle is true', () => {
    const photos = mockPhotos;

    const shuffledTiles = createTilesFromPhotos(photos);
    const unshuffledTiles = createTilesFromPhotos(photos, { shuffle: false });

    const tilePositionMatchesUnshuffled = (tile) =>
      tile === unshuffledTiles[tile.index];

    expect(shuffledTiles.every(tilePositionMatchesUnshuffled)).toBe(false);
  });
});
