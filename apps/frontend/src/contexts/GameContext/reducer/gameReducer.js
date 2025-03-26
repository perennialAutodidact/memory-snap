import _ from 'lodash';
import { produce } from 'immer';
import { isMatchingPair } from '@/contexts/GameContext/utils/isMatchingPair';
import types from '../actions/types';
import { GAME_STAGES } from '@/utils/stages';
import {
  createTilesFromPhotos,
  lockTiles,
  handleMatch,
  flipTile,
  resetTiles,
} from '../utils';
import { initialGameState } from '@/contexts/GameContext';
import { isDevEnv } from '@/utils/tests/isDevEnv';

const { GAME_OVER } = GAME_STAGES;
const useTestData = isDevEnv(import.meta.env);

export const gameReducer = (state, action) => {
  if (!state) {
    throw new Error('please include a state object');
  } else if (!action || (action && !action.type)) {
    throw new Error('please include an action object with "type" property');
  }

  switch (action.type) {
    case types.UPDATE_STAGE: {
      return produce(state, (updatedState) => {
        updatedState.currentStage = action.payload;
      });
    }

    case types.ADD_TILES: {
      return produce(state, (updatedState) => {
        updatedState.tiles.all = createTilesFromPhotos(action.payload.photos, {
          shuffle: !useTestData,
        });
      });
    }

    case types.FLIP_TILE: {
      const { tile: tileToFlip } = action.payload;
      if (!tileToFlip.isFlippable) {
        return state;
      }

      return produce(state, (updatedState) => {
        updatedState.tiles = flipTile(state, tileToFlip);

        const twoTilesAreFlipped = updatedState.tiles.flipped.length === 2;
        if (twoTilesAreFlipped) {
          updatedState.tiles.all = lockTiles(updatedState.tiles.all);
        }

        return updatedState;
      });
    }

    case types.HANDLE_FLIPPED_PAIR: {
      return produce(state, (updatedState) => {
        const { tiles: flippedTiles } = action.payload;
        const { currentPlayer, players } = state;

        if (isMatchingPair(flippedTiles)) {
          updatedState.tiles.all = handleMatch(state.tiles.all, flippedTiles);
          updatedState.tiles.matched = state.tiles.matched.concat(flippedTiles);

          // increment current player's score
          updatedState.players[currentPlayer.index].score += 1;

          const allTilesMatched =
            updatedState.tiles.matched.length === updatedState.tiles.all.length;
          if (allTilesMatched) {
            updatedState.currentStage = GAME_OVER;
          }
        } else {
          const nextPlayerIndex = updatedState.turnCount % players.length;
          const nextPlayer = players[nextPlayerIndex];
          updatedState.currentPlayer = nextPlayer;
          updatedState.turnCount += 1;
        }

        updatedState.tiles.all = resetTiles(updatedState.tiles.all);
        updatedState.tiles.flipped = [];
      });
    }
    case types.HANDLE_GAME_OVER: {
      const playersSortedByScoreDesc = _.sortBy(
        state.players,
        'score',
      ).reverse();
      const playerScores = playersSortedByScoreDesc.map((p) => p.score);
      const allPlayersTied = _.uniq(playerScores).length === 1;
      const winner = allPlayersTied ? null : playersSortedByScoreDesc[0];

      return produce(state, (updatedState) => {
        updatedState.winner = winner;
      });
    }

    case types.RESET_GAME:
      return initialGameState;

    default:
      return state;
  }
};
