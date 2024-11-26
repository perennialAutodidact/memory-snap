import React from 'react';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import {
  FormProvider,
  GameProvider,
  PhotosProvider,
} from '@components/Providers';
import { baseState } from 'contexts';

const setupTests = async (
  Component,
  { props, state = baseState, route = '/' } = {}
) => {
  const user = userEvent.setup({ delay: null });

  render(
    <MemoryRouter initialEntries={[route]}>
      <FormProvider providedState={{ ...state.form }}>
        <PhotosProvider providedState={{ ...state.photos }}>
          <GameProvider providedState={{ ...state.game }}>
            <Component {...props} />
          </GameProvider>
        </PhotosProvider>
      </FormProvider>
    </MemoryRouter>
  );

  return { screen, user };
};

const createSetupTestsForRoute = route => {
  return (component, options = {}) =>
    setupTests(component, { ...options, route });
};

export { setupTests, createSetupTestsForRoute };
