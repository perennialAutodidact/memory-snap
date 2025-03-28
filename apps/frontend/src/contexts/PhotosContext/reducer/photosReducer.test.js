import types from '../actions/types';
import { photosReducer } from './photosReducer';
import { baseState } from '@/contexts';
import { mockPhotos } from '@memory-snap/common/__mocks__';

describe('photosReducer', () => {
  describe(`when called with the ${types.SET_FAIL} type`, () => {
    it('returns state object with updated error message', () => {
      const error = 'test error message';
      const payload = { error };
      const action = {
        type: types.SET_FAIL,
        payload,
      };

      const state = baseState.photos;
      expect(photosReducer(state, action)).toStrictEqual({
        ...state,
        error,
      });
    });
  });

  describe(`when called with the ${types.SET_PHOTOS} type`, () => {
    it('returns state object with updated photos array', () => {
      const photos = mockPhotos.slice(0, 1);
      const payload = { photos };
      const action = {
        type: types.SET_PHOTOS,
        payload,
      };

      const state = baseState.photos;
      expect(photosReducer(state, action)).toStrictEqual({
        ...state,
        currentPhotos: photos,
      });
    });
  });

  it('returns the default state if action type is unknown', () => {
    const { photos: state } = baseState;
    const action = {
      type: 'test',
    };

    expect(photosReducer(state, action)).toBe(baseState.photos);
  });

  describe('errors', () => {
    it('throws an error if state is undefined', () => {
      const state = undefined;
      const action = {
        type: 'test',
      };

      expect(() => photosReducer(state, action)).toThrow();
    });

    it('throws an error if action is undefined', () => {
      const { photos: state } = baseState;
      const action = undefined;

      expect(() => photosReducer(state, action)).toThrow();
    });

    it('throws an error if action type is undefined', () => {
      const { photos: state } = baseState;
      const action = {
        payload: 'test',
      };

      expect(() => photosReducer(state, action)).toThrow();
    });
  });
});
