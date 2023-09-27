import { createTilesFromPhotos } from 'helpers';
import { mockPhotos } from '__mocks__/api/mockPhotos';

describe('createTilesFromPhotos', () => {
  it('returns an array of shuffled tiles if shuffle is true', () => {
    const photos =  mockPhotos;

    const shuffledTiles = createTilesFromPhotos(photos, { shuffle: true });

    const tilePhotos = shuffledTiles.map((tile) => {
        return tile.photo
    })

    //assert that photos and TilePhotos are not equal
  });

  it('returns an array of unshuffled tiles if shuffle is false', () => {
    const photos =  mockPhotos;

    const unshuffledTiles = createTilesFromPhotos(photos, { shuffle: false });

    const tilePhotos = unshuffledTiles.map((tile) => {
        return tile.photo
    })

    //how to test the equality of two arrays of nested objects? 
    expect(tilePhotos[0]).toEqual(mockPhotos[0])

    console.log(tilePhotos.toString(), "PHOTOS?")
  });
});
