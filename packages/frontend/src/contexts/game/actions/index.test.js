import { mockPhotos } from '__mocks__/api/mockPhotos';
import { addTiles, flipTile } from '.';
import types from './types';

describe('GameContext actions', () => {
  it(`returns an action object with type ${types.ADD_TILES} and a payload containing a photos array`, () => {
    const photos = mockPhotos;

    expect(addTiles(photos)).toStrictEqual({
      type: types.ADD_TILES,
      payload: { photos },
    });
  });

  it(`returns an action object with type ${types.FLIP_TILE} and a payload containing a tile object`, () => {
    const tile = {tile: mockPhotos[0]}

    expect(flipTile(tile)).toStrictEqual({
      type: types.FLIP_TILE,
      payload: {tile},
    });
  });
});
