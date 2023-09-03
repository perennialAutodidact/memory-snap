import { setupTests } from "helpers/tests";
import Game from ".";

describe("Game component", () => {
  it("renders", () => {
    const { screen } = setupTests(Game);
    expect(screen.getByLabelText("memory snap game")).toBeInTheDocument();
  });
});
