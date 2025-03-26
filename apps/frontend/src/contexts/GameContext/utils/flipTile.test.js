import { produce } from 'immer';
import { createTilesFromPhotos } from '@/contexts/GameContext/utils';
import types from '@/contexts/GameContext/actions/types';
import { mockPhotos } from '@memory-snap/common/__mocks__';
import { flipTile } from './flipTile';
import { baseState } from '@/contexts';

describe('flipTile()', () => {
  it('returns the tiles array with one tile flipped', () => {
    const allTiles = createTilesFromPhotos(mockPhotos, { shuffle: false });
    const [tile] = allTiles;
    const initialState = produce(baseState.game, (draft) => {
      draft.tiles = { ...baseState.game.tiles, all: allTiles };
    });

    const action = {
      type: types.FLIP_TILE,
      payload: { tile },
    };

    const expected = produce(initialState.tiles, (draftTiles) => {
      draftTiles.all[0].faceUp = true;
      draftTiles.all[0].isFlippable = false;
      draftTiles.flipped.push(draftTiles.all[0]);
    });

    expect(flipTile(initialState, action.payload.tile)).toStrictEqual(expected);
  });
});
