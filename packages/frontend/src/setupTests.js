// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from 'react';
import PropTypes from 'prop-types';
import '@testing-library/jest-dom';
import { mswServer } from '__mocks__/api';
import {
  FormProvider,
  PhotosProvider,
  GameProvider,
} from 'components/providers';
import { BrowserRouter } from 'react-router-dom';

beforeEach(() => {
  mswServer.listen();
});

afterEach(() => mswServer.resetHandlers());

afterAll(() => {
  mswServer.close();
});

export const Providers = ({ children }) => (
  <BrowserRouter>
    <FormProvider>
      <PhotosProvider>
        <GameProvider>{children} </GameProvider>
      </PhotosProvider>
    </FormProvider>
  </BrowserRouter>
);

Providers.propTypes = {
  children: PropTypes.object,
};
