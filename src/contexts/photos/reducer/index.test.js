import { photosReducer } from '.';
import { baseState } from 'contexts';

describe('photosReducer', () => {
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
