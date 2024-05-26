import { isMatchingPair } from 'helpers/isMatchingPair';
import types from '../actions/types';
import { GAME_STAGES } from '../stages';
import {
  createTilesFromPhotos,
  lockTiles,
  handleMatch,
  resetTiles,
  awardPoint,
  getHighScore,
} from 'helpers';

export const gameReducer = (state, action) => {
  if (!state) {
    throw new Error('please include a state object');
  } else if (!action || (action && !action.type)) {
    throw new Error('please include an action object with "type" property');
  }

  switch (action.type) {
    case types.ADD_TILES:
      return {
        ...state,
        tiles: createTilesFromPhotos(action.payload.photos, { shuffle: true }),
      };

    case types.FLIP_TILE: {
      if (!action.payload.tile.isFlippable) {
        return state;
      }

      let tempState = {
        ...state,
        tiles: state.tiles.map((tile) =>
          action.payload.tile.id === tile.id
            ? { ...tile, faceUp: true, isFlippable: false }
            : tile
        ),
        flipped: state.flipped.concat(action.payload.tile),
      };

      if (tempState.flipped.length === 2) {
        tempState = { ...tempState, tiles: lockTiles(tempState.tiles) };
      }

      return tempState;
    }

    case types.HANDLE_FLIPPED_PAIR: {
      let tempState = {
        ...state,
        tiles: isMatchingPair(state.flipped)
          ? handleMatch(state.tiles, action.payload.tiles)
          : resetTiles(state.tiles),
      };

      let tempMatchedTiles = tempState.tiles.filter(
        (tile) => tile.isMatched === true
      );

      return {
        ...state,
        tiles: tempState.tiles,
        flipped: [],
        matchedTiles: tempMatchedTiles,
        currentPlayer: isMatchingPair(state.flipped)
          ? state.currentPlayer
          : state.players[state.turnCount % state.players.length],
        players: isMatchingPair(state.flipped)
          ? awardPoint(state.players, state.currentPlayer.number - 1)
          : state.players,
        turnCount: isMatchingPair(state.flipped)
          ? state.turnCount
          : state.turnCount + 1,
        stage:
          state.tiles.length !== 0 &&
          tempMatchedTiles.length === state.tiles.length
            ? GAME_STAGES.GAME_OVER
            : state.stage,
      };
    }
    case types.HANDLE_GAME_OVER: {
      let highScore = state.players.filter(
        (player) => player.score === getHighScore(state.players)
      );

      return {
        ...state,
        winner: highScore.length > 1 ? null : highScore[0],
      };
    }

    default: {
      return state;
    }
  }
};
