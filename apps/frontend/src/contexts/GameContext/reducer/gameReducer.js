import _ from 'lodash';
import { isMatchingPair } from 'contexts/GameContext/utils/isMatchingPair';
import types from '../actions/types';
import { GAME_STAGES } from 'utils';
import {
  createTilesFromPhotos,
  lockTiles,
  handleMatch,
  flipTile,
  resetTiles,
  updatePlayerScore,
} from '../utils';
import { initialGameState } from 'contexts/GameContext';

export const gameReducer = (state, action) => {
  if (!state) {
    throw new Error('please include a state object');
  } else if (!action || (action && !action.type)) {
    throw new Error('please include an action object with "type" property');
  }

  switch (action.type) {
    case types.UPDATE_STAGE: {
      return {
        ...state,
        stage: action.payload,
      };
    }
    case types.ADD_TILES: {
      const tiles = createTilesFromPhotos(action.payload.photos, {
        shuffle: true,
      });
      return {
        ...state,
        tiles,
      };
    }

    case types.FLIP_TILE: {
      if (!action.payload.tile.isFlippable) {
        return state;
      }

      let tempState = {
        ...state,
        tiles: flipTile(state, action),
      };
      tempState.flipped = tempState.tiles.filter(tile => tile.faceUp);

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

      const { tiles } = tempState;

      return {
        ...state,
        tiles: tempState.tiles,
        flipped: [],
        matchedTiles: tiles.filter(tile => tile.isMatched),
        currentPlayer: isMatchingPair(state.flipped)
          ? state.currentPlayer
          : state.players[state.turnCount % state.players.length],
        players: isMatchingPair(state.flipped)
          ? updatePlayerScore(state.currentPlayer, state.players)
          : state.players,
        turnCount: isMatchingPair(state.flipped)
          ? state.turnCount
          : state.turnCount + 1,
        stage:
          tempState.tiles.length === 0 ? GAME_STAGES.GAME_OVER : state.stage,
      };
    }
    case types.HANDLE_GAME_OVER: {
      const playersSortedByScoreDesc = _.sortBy(
        state.players,
        'score'
      ).reverse();
      const playerScores = playersSortedByScoreDesc.map(p => p.score);
      const allPlayersTied = _.uniq(playerScores).length === 1;
      const winner = allPlayersTied ? null : playersSortedByScoreDesc[0];

      return {
        ...state,
        winner,
      };
    }

    case types.RESET_GAME: {
      return {
        ...initialGameState,
      };
    }

    default: {
      return state;
    }
  }
};
