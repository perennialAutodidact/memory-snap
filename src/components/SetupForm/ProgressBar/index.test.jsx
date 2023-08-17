import { screen, setupTests } from "helpers/tests";
import ProgressBar from ".";

describe("ProgressBar component", () => {
  it("renders progress based on props", () => {
    const props = { currentStep: 1, totalSteps: 3 };
    setupTests(ProgressBar, { props });
    expect(screen.getByRole("progressbar")).toHaveStyle("width: 33%");
  });
});
