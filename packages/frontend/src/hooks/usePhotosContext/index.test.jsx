import { render, renderHook } from '@testing-library/react';
import usePhotosContext from '.';
import PhotosProvider from 'components/providers/photos';

describe('usePhotosContext hook', () => {
  let errorObject;
  beforeEach(() => {
    // prevent error from useGameContext from printing in the test console
    errorObject = console.error;
    console.error = jest.fn();
  });

  afterEach(() => {
    console.error = errorObject;
  });

  it('throws an error if not wrapped in the PhotosProvider component', () => {
    expect(() => renderHook(usePhotosContext)).toThrow();
  });

  it('renders component wrapped in PhotosProvider without error', () => {
    expect(() =>
      renderHook(usePhotosContext, { wrapper: PhotosProvider })
    ).not.toThrow();
  });
});
