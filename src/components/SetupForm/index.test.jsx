import { setupTests, screen } from "helpers/tests";
import SetupForm from ".";

describe("SetupForm component", () => {
  it("renders a heading", () => {
    setupTests(SetupForm);
    expect(
      screen.getByRole("heading", { level: 2, name: /game setup/i })
    ).toBeInTheDocument();
  });

  it("renders form progress bar", () => {
    setupTests(SetupForm);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
});
