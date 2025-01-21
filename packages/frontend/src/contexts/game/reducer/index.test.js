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

  it('updates the value for player names if the action type is UPDATE_NAMES', () => {
    const { game: state } = baseState;

    const action = {
      type: 'UPDATE_NAMES',
      payload: { player1Name: 'Mario', player2Name: 'Luigi' },
    };

    const result = gameReducer(state, action);

    expect(result.players[0].name).toBe('Mario');
    expect(result.players[1].name).toBe('Luigi');
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

    const initialTilesState = produce(state, draft => {
      draft.tiles = createTilesFromPhotos(mockPhotos);
    });

    const payload = { tile: initialTilesState.tiles[4] };

    const action = {
      type: 'FLIP_TILE',
      payload: payload,
    };

    const expected = produce(initialTilesState, draft => {
      draft.tiles[4].faceUp = true;
      draft.tiles[4].isFlippable = false;
      draft.flipped = [payload.tile];
    });

    expect(gameReducer(initialTilesState, action)).toStrictEqual(expected);
  });

  it('returns state unchanged if target tile is unflippable and action type is FLIP_TILE', () => {
    const { game: state } = baseState;

    const initialTilesState = produce(state, draft => {
      draft.tiles = createTilesFromPhotos(mockPhotos);
      draft.tiles[6].isFlippable = false;
    });

    const payload = { tile: initialTilesState.tiles[6] };

    const action = {
      type: 'FLIP_TILE',
      payload: payload,
    };

    expect(gameReducer(initialTilesState, action)).toStrictEqual(
      initialTilesState
    );
  });

  it('returns the proper winner object if the action type is HANDLE_GAME_OVER', () => {
    const { game: state } = baseState;

    const gameOverState = produce(state, draft => {
      draft.players[0].score = 3;
    });

    const action = {
      type: 'HANDLE_GAME_OVER',
    };

    expect(gameReducer(gameOverState, action).winner.name).toBe('Player 1');
  });

  it('returns null for a tie if the action type is HANDLE_GAME_OVER', () => {
    const { game: state } = baseState;

    const gameOverState = produce(state, draft => {
      draft.players[0].score = 2;
      draft.players[1].score = 2;
    });

    const action = {
      type: 'HANDLE_GAME_OVER',
    };

    expect(gameReducer(gameOverState, action).winner).toBe(null);
  });

  it('does not change the current player when a match is made', () => {
    const { game: state } = baseState;

    const tiles = createTilesFromPhotos(mockPhotos, false).slice(0, 2);

    const gameOverState = produce(state, draft => {
      draft.flipped = tiles;
    });

    expect(state.currentPlayer.name).toBe('Player 1');

    const payload = { tiles };

    const action = {
      type: 'HANDLE_FLIPPED_PAIR',
      payload: payload,
    };

    expect(gameReducer(gameOverState, action).currentPlayer.name).toBe(
      'Player 1'
    );
  });

  it('changes the current player when no match is made', () => {
    const { game: state } = baseState;

    const tiles = createTilesFromPhotos(mockPhotos, false).slice(1, 3);

    const gameOverState = produce(state, draft => {
      draft.flipped = tiles;
    });

    expect(state.currentPlayer.name).toBe('Player 1');

    const payload = { tiles };

    const action = {
      type: 'HANDLE_FLIPPED_PAIR',
      payload: payload,
    };

    expect(gameReducer(gameOverState, action).currentPlayer.name).toBe(
      'Player 2'
    );
  });
});
