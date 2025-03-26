import { mockPhotos } from '@memory-snap/common/__mocks__';
import {
  setPhotosError,
  setPhotos,
  setPhotosStatus,
} from './photosContextActions';
import types from './types';

describe('PhotosContext actions', () => {
  describe('setPhotosError', () => {
    it(`returns an action object with type ${types.SET_FAIL} and an error message`, () => {
      const error = 'test error mesage';
      expect(setPhotosError(error)).toStrictEqual({
        type: types.SET_FAIL,
        payload: { error },
      });
    });

    it('throws an error if no message is provided', () => {
      const error = null;
      expect(() => setPhotosError(error)).toThrow();
    });
  });

  describe('setPhotos', () => {
    it(`returns an action object with type ${types.SET_PHOTOS} and a payload containing a photos array`, () => {
      const photos = mockPhotos.slice(0, 1);
      expect(setPhotos(photos)).toStrictEqual({
        type: types.SET_PHOTOS,
        payload: { photos },
      });
    });

    it('throws an error if photos is not an array', () => {
      expect(() => setPhotos(null)).toThrow();
    });
  });

  describe('setPhotosStatus', () => {
    it(`returns an action object with type ${types.SET_STATUS} and a payload containing a status string`, () => {
      const status = 'PENDING';
      expect(setPhotosStatus(status)).toStrictEqual({
        type: types.SET_STATUS,
        payload: { status },
      });
    });

    it('raises an error if the status is not one of the allowed statuses', () => {
      const status = 'INVALID';
      expect(() => setPhotosStatus(status)).toThrow();
    });
  });
});
