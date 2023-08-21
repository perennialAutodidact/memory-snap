import App from "App";
import { setupTests } from "helpers/tests";

describe("App", () => {
  it("renders memory snap heading", () => {
    const { screen } = setupTests(App, {});
    expect(
      screen.getByRole("heading", { level: 1, name: /memory snap/i })
    ).toBeInTheDocument();
  });
});
