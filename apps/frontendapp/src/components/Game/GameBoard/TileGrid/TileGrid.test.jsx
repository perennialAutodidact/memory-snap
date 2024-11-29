import { setupTests } from "@/utils";
import { createTilesFromPhotos } from "@/contexts/GameContext/utils";
import TileGrid from "./TileGrid";
import { mockPhotos } from "@memory-snap/common/__mocks__";
import { within } from "@testing-library/dom";

describe("TileGrid component", () => {
  it("renders all tiles", () => {
    const tiles = createTilesFromPhotos(mockPhotos);

    const { screen } = setupTests(TileGrid, { props: { tiles } });

    const tileElements = within(screen.getByTestId("tile-grid")).getAllByTestId(
      /tile/i,
    );

    expect(tileElements.length).toBe(tiles.length);
  });
});
