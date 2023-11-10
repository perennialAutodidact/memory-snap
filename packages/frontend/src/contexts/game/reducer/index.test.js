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

    const result = gameReducer(state, action);

    expect(result.tiles.length).toEqual(10);
  });

  it('toggles the faceUp value of target tile if action type is FLIP_TILE', () => {
    const { game: state } = baseState;

    const initialTilesState = produce(state, (draft) => {
      draft.tiles = createTilesFromPhotos(mockPhotos);
    });

    const payload = { tile: initialTilesState.tiles[4] };

    const action = {
      type: 'FLIP_TILE',
      payload: payload,
    };

    const expected = produce(initialTilesState, (draft) => {
      draft.tiles[4].faceUp = true;
      draft.flipped = [payload.tile];
    });

    expect(gameReducer(initialTilesState, action)).toStrictEqual(expected);
  });

  it('toggles the faceUp value of flipped tiles if action type is RESET_TILES', () => {
    const { game: state } = baseState;

    const initialTilesState = produce(state, (draft) => {
      draft.tiles = createTilesFromPhotos(mockPhotos);
    });
    const flippedState = produce(initialTilesState, (draft) => {
      draft.tiles[0].faceUp = true;
      draft.tiles[4].faceUp = true;
    });

    const payload = { tiles: [flippedState.tiles[0], flippedState.tiles[4]] };

    const action = {
      type: 'RESET_TILES',
      payload: payload,
    };

    expect(gameReducer(flippedState, action)).toStrictEqual(initialTilesState);
  });
});
