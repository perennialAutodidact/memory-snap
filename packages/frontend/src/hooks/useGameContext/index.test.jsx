import React from 'react';
import { renderHook } from '@testing-library/react';
import useGameContext from '.';
import GameProvider from 'components/providers/game';
import { PhotosProvider } from 'components/providers';

describe('useGameContext hook', () => {
  /* eslint-disable no-console */
  let errorObject;
  beforeEach(() => {
    // prevent error from useGameContext from printing in the test console
    errorObject = console.error;
    // eslint-ignore-next-line
    console.error = jest.fn();
  });

  afterEach(() => {
    console.error = errorObject;
  });
  /* eslint-enable no-console */

  it('throws an error if not wrapped in the GameProvider component', () => {
    expect(() => renderHook(useGameContext)).toThrow();
  });

  it('renders component when wrapped in necessary providers', () => {
    // eslint-disable-next-line
    const Providers = ({ children }) => (
      <PhotosProvider>
        <GameProvider>{children}</GameProvider>
      </PhotosProvider>
    );
    expect(() =>
      renderHook(useGameContext, { wrapper: Providers })
    ).not.toThrow();
  });

  it('throws an error if not wrapped in the PhotosProvider component', () => {
    expect(() =>
      renderHook(useGameContext, { wrapper: GameProvider })
    ).toThrow();
  });
});
