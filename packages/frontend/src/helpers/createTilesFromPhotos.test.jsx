import { createTilesFromPhotos } from 'helpers';
import { mockPhotos } from '__mocks__/api/mockPhotos';

describe('createTilesFromPhotos', () => {
  it('returns an array double the length of the array its given', () => {
    const photos =  mockPhotos;

    const shuffledTiles = createTilesFromPhotos(photos, { shuffle: true });

    const tilePhotos = shuffledTiles.map((tile) => {
        return tile.photo
    })

    //asserting that it doubles the length of the mockPhotos
    expect(photos.length * 2).toEqual(tilePhotos.length)

  });

  it('returns an array of unshuffled tiles if shuffle is false', () => {
    const photos =  mockPhotos;

    const unshuffledTiles = createTilesFromPhotos(photos, { shuffle: false });

    const tilePhotos = unshuffledTiles.map((tile) => {
        return tile.photo
    })

    //how to test this in a better way? 
    expect(tilePhotos[0]).toEqual(mockPhotos[0])
    expect(tilePhotos[2]).toEqual(mockPhotos[1])
    expect(tilePhotos[4]).toEqual(mockPhotos[2])
    expect(tilePhotos[6]).toEqual(mockPhotos[3])
    expect(tilePhotos[8]).toEqual(mockPhotos[4])
  });
});
