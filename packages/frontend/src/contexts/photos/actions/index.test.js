import { mockPhotos } from '__mocks__/api/mockPhotos';
import { setPhotos, setStatus } from '.';
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

  describe('setStatus', () => {
    it(`returns an action object with type ${types.SET_STATUS} and a payload containing a status string`, () => {
      const status = 'PENDING';
      expect(setStatus(status)).toStrictEqual({
        type: types.SET_STATUS,
        payload: { status },
      })
    })

    it('raises an error if the status is not one of the allowed statuses', () => {
      const status = 'INVALID';
      expect(() => setStatus(status)).toThrow()
    })
  })
});
