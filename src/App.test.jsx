import App from "App";
import { setupTests, screen } from "helpers/tests";

describe("App", () => {
  it("renders memory snap heading", () => {
    setupTests(App, {});
    expect(
      screen.getByRole("heading", { level: 1, name: /memory snap/i })
    ).toBeInTheDocument();
  });
});
