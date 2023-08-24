import { render } from "@testing-library/react";
import useGameContext from ".";
import GameProvider from "components/Game/GameProvider";

describe("useGameContext hook", () => {
  const Component = () => {
    const context = useGameContext();
    return <div data-testid="context-result">{JSON.stringify(context)}</div>;
  };

  let errorObject;
  beforeEach(() => {
    // prevent error from useGameContext from printing in the test console
    errorObject = console.error;
    console.error = jest.fn();
  });

  afterEach(() => {
    console.error = errorObject;
  });

  it("throws an error if not wrapped in the GameProvider component", () => {
    expect(() => render(<Component />)).toThrow();
  });

  it("renders component wrapped in GameProvider without error", () => {
    expect(() =>
      render(
        <GameProvider>
          <Component />
        </GameProvider>
      )
    ).not.toThrow();
  });
});
