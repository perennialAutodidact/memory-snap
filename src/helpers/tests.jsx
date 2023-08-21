import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameProvider from "components/Game/GameProvider";
import { BrowserRouter } from "react-router-dom";

const setupTests = (Component, { props, state, route = "/" } = {}) => {
  window.history.pushState({}, "Test", route);

  const user = userEvent.setup();
  render(
    <BrowserRouter>
      <GameProvider providedState={{ ...state }}>
        <Component {...props} />
      </GameProvider>
    </BrowserRouter>
  );

  return { screen, user };
};

export { setupTests };
