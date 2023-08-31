import { baseState } from 'contexts';
import { gameReducer } from '.';

describe('gameReducer', () => {
  describe('errors', () => {
    it('throws an error if state is undefined', () => {
      const state = undefined;
      const action = {
        type: 'test',
      };

      expect(() => gameReducer(state, action)).toThrow();
    });

    it('throws an error if action is undefined', () => {
      const { game: state } = baseState;
      const action = undefined;

      expect(() => gameReducer(state, action)).toThrow();
    });

    it('throws an error if action type is undefined', () => {
      const { game: state } = baseState;
      const action = {
        payload: 'test',
      };

      expect(() => photosReducer(state, action)).toThrow();
    });
  });
});
