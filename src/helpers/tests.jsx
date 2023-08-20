import { render, screen } from "@testing-library/react";
import GameProvider from "components/GameProvider";

const setupTests = (Component, { props, state } = {}) => {
  render(
    <GameProvider providedState={{ ...state }}>
      <Component {...props} />
    </GameProvider>
  );
};

export { setupTests, screen };
