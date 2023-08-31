import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import GameProvider from 'components/Game/GameProvider';

const setupTests = (Component, { props, state, route = '/' } = {}) => {
  // push the route into the "browser" history
  window.history.pushState({}, 'Test', route);

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
