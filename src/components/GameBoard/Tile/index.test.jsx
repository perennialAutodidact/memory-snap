import Tile from ".";
import { screen } from "@testing-library/react";
import { setupTests } from "utils/tests";

describe("Tile component", () => {
  it("renders with image from props", () => {
    const props = {
      img: {
        src: "http://test.com",
        altText: "blahblah",
      },
    };
    setupTests(Tile, { props });
    const img = screen.getByAltText(props.img.altText);
    expect(img).toBeInTheDocument();
  });
});
