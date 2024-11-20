import { renderHook } from '@testing-library/react';
import usePhotosContext from '.';
import PhotosProvider from 'components/providers/photos';
import FormProvider from 'components/providers/form';

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
    const Providers = ({ children }) => (
      <FormProvider>
        <PhotosProvider>
          {children}
        </PhotosProvider>
      </FormProvider>
    );
    expect(() =>
      renderHook(usePhotosContext, { wrapper: Providers })
    ).not.toThrow();
  });
});
