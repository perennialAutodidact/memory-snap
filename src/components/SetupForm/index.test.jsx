import { setupTests } from "helpers/tests";
import SetupForm from ".";

describe("SetupForm component", () => {
  it("renders a heading", () => {
    const { screen } = setupTests(SetupForm);
    expect(
      screen.getByRole("heading", { level: 2, name: /game setup/i })
    ).toBeInTheDocument();
  });

  it("renders form progress bar", () => {
    const { screen } = setupTests(SetupForm);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });
});
