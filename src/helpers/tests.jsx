import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import GameProvider from "components/Game/GameProvider";
import PhotosProvider from "components/Game/PhotosProvider";

const setupTests = (Component, { props, state, route = "/" } = {}) => {
  // push the route into the "browser" history
  window.history.pushState({}, "Test", route);

  const user = userEvent.setup();
  render(
    <BrowserRouter>
      <GameProvider providedState={{ ...state }}>
        <PhotosProvider>
          <Component {...props} />
        </PhotosProvider>
      </GameProvider>
    </BrowserRouter>
  );

  return { screen, user };
};

export { setupTests };
