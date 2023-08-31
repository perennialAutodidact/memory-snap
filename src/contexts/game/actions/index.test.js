import { setPhotos } from '.';
import { mockPhotos } from 'components/__mocks__/mockPhotos';
import types from './types';

describe('GameContext action creator functions', () => {
  describe('setPhotos', () => {
    it('returns an action object with an array of photos', () => {
      expect(setPhotos(mockPhotos)).toEqual({
        type: types.SET_PHOTOS,
        payload: { photos: mockPhotos },
      });
    });

    it('throws an error if no photos array is passed', () => {
      expect(() => setPhotos()).toThrow();
    });
  });
});
