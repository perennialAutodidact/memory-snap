import { mockPhotos } from '@memory-snap/common/__mocks__';
import { addTiles, flipTile } from './gameContextActions';
import types from './types';
import { createTilesFromPhotos } from '@/contexts/GameContext/utils';

describe('GameContext actions', () => {
  it(`returns an action object with type ${types.ADD_TILES} and a payload containing a photos array`, () => {
    const photos = mockPhotos;

    expect(addTiles(photos)).toStrictEqual({
      type: types.ADD_TILES,
      payload: { photos },
    });
  });

  it(`returns an action object with type ${types.FLIP_TILE} and a payload containing a tile object`, () => {
    const tile = createTilesFromPhotos(mockPhotos, { shuffle: false })[0];

    expect(flipTile(tile)).toStrictEqual({
      type: types.FLIP_TILE,
      payload: { tile },
    });
  });
});
