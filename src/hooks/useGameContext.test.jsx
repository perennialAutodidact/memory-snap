import { render, screen } from "@testing-library/react";
import useGameContext from "./useGameContext";
import GameProvider from "components/GameProvider";
import { baseState } from "contexts/game";

describe("useGameContext hook", () => {
  const Component = () => {
    const context = useGameContext();
    return <div data-testid="context-result">{JSON.stringify(context)}</div>;
  };

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
