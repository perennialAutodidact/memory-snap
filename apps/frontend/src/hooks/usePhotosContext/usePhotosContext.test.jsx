import { renderHook } from '@testing-library/react';
import usePhotosContext from './usePhotosContext';
import { ProvidersWrapper } from '@/utils';

describe('usePhotosContext hook', () => {
  let errorObject;
  beforeEach(() => {
    // prevent error from useGameContext from printing in the test console
    errorObject = console.error;
    console.error = vi.fn();
  });

  afterEach(() => {
    console.error = errorObject;
  });

  it('throws an error if not wrapped in necessary context providers', async () => {
    expect(() => renderHook(usePhotosContext)).toThrow();
  });

  it('renders component without error when wrapped in necessary context providers', () => {
    expect(() =>
      renderHook(() => usePhotosContext, { wrapper: ProvidersWrapper }),
    ).not.toThrow();
  });
});
