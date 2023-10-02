import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import {
  FormProvider,
  GameProvider,
  PhotosProvider,
} from 'components/providers';
import { baseState } from 'contexts';

const setupTests = (
  Component,
  { props, state = baseState, route = '/' } = {}
) => {
  // push the route into the "browser" history
  window.history.pushState({}, 'Test', route);

  const user = userEvent.setup();
  render(
    <BrowserRouter>
      <FormProvider providedState={{ ...state.form }}>
        <GameProvider providedState={{ ...state.game }}>
          <PhotosProvider providedState={{ ...state.photos }}>
            <Component {...props} />
          </PhotosProvider>
        </GameProvider>
      </FormProvider>
    </BrowserRouter>
  );

  return { screen, user };
};

export { setupTests };
