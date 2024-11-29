import { setupTests } from "@/utils";
import Header from "./FormHeader";
import { baseState } from "@/contexts";

describe("Setup Form Header component", () => {
  const defaultProps = { text: "Game setup" };
  it("renders header text from props", () => {
    const props = { ...defaultProps };
    const {
      screen: { getByRole },
    } = setupTests(Header, { props });

    expect(
      getByRole("heading", { level: 1, name: props.text }),
    ).toBeInTheDocument();
  });

  it("renders progress bar", () => {
    const props = { ...defaultProps };
    const {
      screen: { getByRole },
    } = setupTests(Header, { props });
    expect(getByRole("progressbar")).toBeInTheDocument();
  });

  it("renders current step number and total steps count", () => {
    const props = { ...defaultProps };
    const {
      screen: { getByText },
    } = setupTests(Header, { props });
    const { currentStep, totalSteps } = baseState.form;

    expect(
      getByText(`Step ${currentStep} of ${totalSteps}`),
    ).toBeInTheDocument();
  });
});
