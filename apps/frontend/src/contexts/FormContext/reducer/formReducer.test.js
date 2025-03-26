import { formReducer } from './formReducer';
import { baseState } from '@/contexts';

describe('formReducer', () => {
  it('returns the default state if action type is unknown', () => {
    const { form: state } = baseState;
    const action = {
      type: 'test',
    };

    expect(formReducer(state, action)).toBe(state);
  });

  describe('errors', () => {
    it('throws an error if state is undefined', () => {
      const state = undefined;
      const action = {
        type: 'test',
      };

      expect(() => formReducer(state, action)).toThrow();
    });

    it('throws an error if action is undefined', () => {
      const { photos: state } = baseState;
      const action = undefined;

      expect(() => formReducer(state, action)).toThrow();
    });

    it('throws an error if action type is undefined', () => {
      const { photos: state } = baseState;
      const action = {
        payload: 'test',
      };

      expect(() => formReducer(state, action)).toThrow();
    });
  });
});
