import { produce } from "immer";
import { createTilesFromPhotos } from "@/contexts/GameContext/utils";
import types from "@/contexts/GameContext/actions/types";
import { mockPhotos } from "@memory-snap/common/__mocks__";
import { flipTile } from "./flipTile";
import { baseState } from "@/contexts";

describe("flipTile()", () => {
  it("returns the tiles array with one tile flipped", () => {
    const tiles = createTilesFromPhotos(mockPhotos);
    const [tile] = tiles;
    const state = produce(baseState.game, (draft) => {
      draft.tiles = tiles;
    });

    const action = {
      type: types.FLIP_TILE,
      payload: { tile },
    };

    const expected = produce(state.tiles, (draftTiles) => {
      draftTiles[0].faceUp = true;
      draftTiles[0].isFlippable = false;
    });

    expect(flipTile(state, action)).toStrictEqual(expected);
  });
});
