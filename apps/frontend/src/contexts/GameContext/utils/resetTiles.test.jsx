import { resetTiles } from './resetTiles';
import { createTilesFromPhotos } from './createTilesFromPhotos';
import { mockPhotos } from '@memory-snap/common/__mocks__';
import { produce } from 'immer';

describe('resetTiles', () => {
  it('resets all tiles to be flippable and face down', () => {
    const initialTiles = createTilesFromPhotos(mockPhotos);

    const tilesWithSomeFlipped = produce(initialTiles, (draft) => {
      draft[3].isFlippable = false;
      draft[3].faceUp = true;
      draft[6].isFlippable = false;
      draft[6].faceUp = true;
    });

    const tilesAfterReset = resetTiles(tilesWithSomeFlipped);

    expect(tilesAfterReset).toStrictEqual(initialTiles);
  });
});
