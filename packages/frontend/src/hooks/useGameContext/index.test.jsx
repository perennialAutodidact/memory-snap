import { renderHook } from '@testing-library/react';
import useGameContext from '.';
import { Providers } from 'helpers/tests';

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
