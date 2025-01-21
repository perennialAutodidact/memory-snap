import { baseState } from '@/contexts';
import { gameReducer } from './gameReducer';
import { mockPhotos } from '@memory-snap/common/__mocks__';
import { produce } from 'immer';
import {
  createTilesFromPhotos,
  handleMatch,
  resetTiles,
} from '@/contexts/GameContext/utils';
import { GAME_STAGES } from '@/utils/stages';
import types from '../actions/types';

const { PLAYING } = GAME_STAGES;

describe('gameReducer', () => {
  it('returns the default state if action type is unknown', () => {
    const state = baseState.game;
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
      const state = baseState.game;
      const action = undefined;

      expect(() => gameReducer(state, action)).toThrow();
    });

    it('throws an error if action type is undefined', () => {
      const state = baseState.game;
      const action = {
        payload: 'test',
      };

      expect(() => gameReducer(state, action)).toThrow();
    });
  });

  it(`creates a tiles array in game context if action type is ${types.ADD_TILES}`, () => {
    const state = baseState.game;
    const photos = mockPhotos;

    const action = {
      type: types.ADD_TILES,
      payload: { photos },
    };

    const result = gameReducer(state, action);

    expect(result.tiles.all.length).toEqual(10);
  });

  describe(`when called with ${types.FLIP_TILE}`, () => {
    it('returns state object with one tile flipped', () => {
      const state = produce(baseState.game, (draft) => {
        draft.tiles.all = createTilesFromPhotos(mockPhotos, { shuffle: false });
      });

      const action = {
        type: types.FLIP_TILE,
        payload: { tile: state.tiles.all[4] },
      };

      const expected = produce(state, (draft) => {
        draft.tiles.all[4].faceUp = true;
        draft.tiles.all[4].isFlippable = false;
        draft.tiles.flipped.push(draft.tiles.all[4]);
      });

      expect(gameReducer(state, action)).toStrictEqual(expected);
    });

    it('returns state unchanged if target tile is unflippable', () => {
      const state = produce(baseState.game, (draft) => {
        draft.tiles.all = createTilesFromPhotos(mockPhotos, { shuffle: false });
        draft.tiles.all[6].isFlippable = false;
      });

      const tile = state.tiles.all[6];

      const action = {
        type: types.FLIP_TILE,
        payload: { tile },
      };

      const expected = state;

      expect(gameReducer(state, action)).toStrictEqual(expected);
    });
  });

  describe(`when called with ${types.HANDLE_GAME_OVER}`, () => {
    it(`returns state object with winner type is ${types.HANDLE_GAME_OVER}`, () => {
      const state = produce(baseState.game, (draft) => {
        draft.currentStage = PLAYING;
        draft.players[0].score = 3;
      });

      const action = {
        type: types.HANDLE_GAME_OVER,
      };

      const expected = produce(state, (draft) => {
        draft.winner = state.players[0];
      });

      expect(gameReducer(state, action)).toStrictEqual(expected);
    });

    // FUTURE: AMEND THIS TO HANDLE MORE THAN TWO PLAYERS
    it('returns state object with no winner if there is a tie', () => {
      const state = produce(baseState.game, (draft) => {
        draft.currentStage = PLAYING;
        draft.players[0].score = 2;
        draft.players[1].score = 2;
      });

      const action = {
        type: types.HANDLE_GAME_OVER,
      };

      const expected = produce(state, (draft) => {
        draft.winner = null;
      });

      expect(gameReducer(state, action)).toStrictEqual(expected);
    });
  });

  describe(`when called with ${types.HANDLE_FLIPPED_PAIR}`, () => {
    const setupWithTwoTilesFlipped = ({ flippedIndices }) => {
      const tiles = createTilesFromPhotos(mockPhotos, {
        shuffle: false,
      });
      const state = produce(baseState.game, (draft) => {
        draft.tiles.all = produce(tiles, (tilesDraft) => {
          flippedIndices.forEach((index) => {
            tilesDraft[index].isFlippable = false;
            tilesDraft[index].faceUp = true;
          });
        });
        draft.tiles.flipped = flippedIndices.map((index) => ({
          ...draft.tiles.all[index],
          faceUp: true,
        }));

        draft.currentPlayer = draft.players[0];
      });

      return { initialTiles: tiles, stateWithTwoTilesFlipped: state };
    };

    it("returns object with reset tiles and changed current player if tiles don't match", () => {
      const { initialTiles, stateWithTwoTilesFlipped } =
        setupWithTwoTilesFlipped({
          flippedIndices: [0, 5],
        });

      const { tiles } = stateWithTwoTilesFlipped;
      const action = {
        type: types.HANDLE_FLIPPED_PAIR,
        payload: { tiles: tiles.flipped },
      };

      const expected = produce(baseState.game, (draft) => {
        draft.currentPlayer = draft.players[1];
        draft.tiles.all = initialTiles;
        draft.tiles.flipped = [];
        draft.turnCount = baseState.game.turnCount + 1;
      });

      expect(gameReducer(stateWithTwoTilesFlipped, action)).toStrictEqual(
        expected,
      );
    });

    it('returns object with reset tiles and incremented player score if tiles match', () => {
      const { stateWithTwoTilesFlipped } = setupWithTwoTilesFlipped({
        flippedIndices: [0, 1],
      });
      const { tiles } = stateWithTwoTilesFlipped;
      const action = {
        type: types.HANDLE_FLIPPED_PAIR,
        payload: { tiles: tiles.flipped },
      };

      const expected = produce(baseState.game, (draft) => {
        draft.tiles.all = handleMatch(tiles.all, tiles.flipped);
        draft.tiles.all = resetTiles(draft.tiles.all);
        draft.tiles.matched.push(...tiles.flipped);
        draft.players[draft.currentPlayer.index].score += 1;
      });

      expect(gameReducer(stateWithTwoTilesFlipped, action)).toStrictEqual(
        expected,
      );
    });
  });

  describe(`when called with ${types.RESET_TILES}`, () => {
    it('returns state object with initial state object', () => {
      const initialState = produce(baseState.game, (draft) => {
        draft.currentStage = GAME_STAGES.GAME_OVER;
      });

      const action = {
        type: types.RESET_GAME,
      };

      const expected = baseState.game;
      expect(gameReducer(initialState, action)).toStrictEqual(expected);
    });
  });
});
