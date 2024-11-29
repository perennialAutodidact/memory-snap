import { resetTiles } from "./resetTiles";
import { createTilesFromPhotos } from "./createTilesFromPhotos";
import { mockPhotos } from "@memory-snap/common/__mocks__";
import { produce } from "immer";

describe("resetTiles", () => {
  it("returns an array the length of the array it is given", () => {
    const tiles = createTilesFromPhotos(mockPhotos);

    const lockedTiles = resetTiles(tiles);

    expect(lockedTiles.length).toEqual(tiles.length);
  });

  it("changes the is flippable value for each tile to true", () => {
    const tiles = createTilesFromPhotos(mockPhotos);

    const twoUnflippableTiles = produce(tiles, (draft) => {
      draft[3].isFlippable = false;
      draft[6].isFlippable = false;
    });

    const someTilesAreUnflippable = twoUnflippableTiles.some(
      (tile) => tile.isFlippable === true,
    );
    expect(someTilesAreUnflippable).toBe(true);

    const allFlippableTiles = resetTiles(twoUnflippableTiles);

    const allTilesAreFlippable = !allFlippableTiles.some(
      (tile) => tile.isFlippable === false,
    );

    expect(allTilesAreFlippable).toBe(true);
  });

  it("changes the face up value for each tile to false", () => {
    const tiles = createTilesFromPhotos(mockPhotos);

    const flippedTiles = produce(tiles, (draft) => {
      draft[3].faceUp = true;
      draft[6].faceUp = true;
    });

    const someTilesAreFaceUp = flippedTiles.some(
      (tile) => tile.faceUp === true,
    );

    expect(someTilesAreFaceUp).toBe(true);
    const faceDownTiles = resetTiles(flippedTiles);

    const allTilesAreFaceDown = !faceDownTiles.some(
      (tile) => tile.faceUp === true,
    );

    expect(allTilesAreFaceDown).toBe(true);
  });
});
