import { baseState } from 'contexts';
import { gameReducer } from '.';
import { mockPhotos } from '__mocks__/api/mockPhotos';
import { produce } from 'immer';
import { createTilesFromPhotos } from 'helpers';

describe('gameReducer', () => {
  it('returns the default state if action type is unknown', () => {
    const { game: state } = baseState;
    const action = {
      type: 'test',
    };

    expect(gameReducer(state, action)).toBe(state);
  });

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

      expect(() => gameReducer(state, action)).toThrow();
    });
  });

  it('creates a tiles array in game context if action type is ADD_TILES', () => {
    const { game: state } = baseState;
    const photos = mockPhotos;

    const action = {
      type: 'ADD_TILES',
      payload: { photos },
    };

    const result = gameReducer(state, action)

    expect(result.tiles.length).toEqual(10);
  });

  it('toggles the faceUp value of target tile if action type is FLIP_TILE', () => {
    const { game: state } = baseState;
    const photos = mockPhotos;

    const initialTilesState = produce(state, (draft) => {
      draft.tiles = createTilesFromPhotos(mockPhotos)
    })

    const tile = initialTilesState.tiles[4]
    
    const action = {
      type: 'FLIP_TILE',
      payload: { tile },
    };

    const expected = produce(initialTilesState, (draft) => {
      draft.tiles[4].faceUp = true;
    })

    expect(gameReducer(initialTilesState, action)).toStrictEqual(expected);
  });
});
