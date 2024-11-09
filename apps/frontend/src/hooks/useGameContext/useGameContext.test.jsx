import React from 'react';
import { renderHook } from '@testing-library/react';
import useGameContext from './useGameContext';
import {
  FormProvider,
  GameProvider,
  PhotosProvider,
} from 'components/Providers';

describe('useGameContext hook', () => {
  /* eslint-disable no-console */
  let errorObject;
  beforeEach(() => {
    // prevent error from useGameContext from printing in the test console
    errorObject = console.error;
    console.error = jest.fn();
  });

  afterEach(() => {
    console.error = errorObject;
  });
  /* eslint-enable no-console */

  it('throws an error if not wrapped in necessary context providers', () => {
    expect(() => renderHook(useGameContext)).toThrow();
  });

  it('renders component when wrapped in necessary context providers', () => {
    // eslint-disable-next-line react/prop-types
    const Providers = ({ children }) => (
      <FormProvider>
        <PhotosProvider>
          <GameProvider>{children}</GameProvider>
        </PhotosProvider>
      </FormProvider>
    );
    expect(() =>
      renderHook(useGameContext, { wrapper: Providers })
    ).not.toThrow();
  });
});
