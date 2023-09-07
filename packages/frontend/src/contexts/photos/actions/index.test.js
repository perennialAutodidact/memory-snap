import { mockPhotos } from '__mocks__/api/mockPhotos';
import { setPhotos } from '.';
import types from './types';

describe('PhotosContext actions', () => {
  describe('setPhotos', () => {
    it(`returns an action object with type ${types.SET_PHOTOS} and a payload containing a photos array`, () => {
      const photos = mockPhotos.slice(0, 1);
      expect(setPhotos(photos)).toStrictEqual({
        type: types.SET_PHOTOS,
        payload: { photos },
      });
    });
  });
});
