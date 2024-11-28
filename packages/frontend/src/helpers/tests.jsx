import React from 'react';
import PropTypes from 'prop-types';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import {
  FormProvider,
  GameProvider,
  PhotosProvider,
} from 'components/providers';
import { baseState } from 'contexts';

const Providers = ({ children, state = baseState }) => (
  <BrowserRouter>
    <FormProvider providedState={{ ...state.form }}>
      <PhotosProvider providedState={{ ...state.photos }}>
        <GameProvider providedState={{ ...state.game }}>
          {children}
        </GameProvider>
      </PhotosProvider>
    </FormProvider>
  </BrowserRouter>
);

Providers.propTypes = PropTypes.shape({
  children: PropTypes.node,
  state: PropTypes.object,
})

const setupTests = (
  Component,
  { props, state = baseState, route = '/' } = {}
) => {
  // push the route into the "browser" history
  window.history.pushState({}, 'Test', route);

  const user = userEvent.setup({ delay: null });
  render(
    <Providers state={state}>
       <Component {...props}/>
    </Providers>
  );

  return { screen, user };
};

const createSetupTestsForRoute = route => {
  return (component, options) => setupTests(component, { ...options, route });
};

export { setupTests, createSetupTestsForRoute, Providers };
