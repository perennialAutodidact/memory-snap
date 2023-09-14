import { renderHook } from '@testing-library/react';
import useFormContext from '.';
import FormProvider from 'components/providers/form';

describe('useFormContext hook', () => {
  let errorObject;
  beforeEach(() => {
    // prevent error from useGameContext from printing in the test console
    errorObject = console.error;
    console.error = jest.fn();
  });

  afterEach(() => {
    console.error = errorObject;
  });

  it('throws an error if not wrapped in the FormProvider component', () => {
    expect(() => renderHook(useFormContext)).toThrow();
  });

  it('renders component wrapped in FormProvider without error', () => {
    expect(() =>
      renderHook(useFormContext, { wrapper: FormProvider })
    ).not.toThrow();
  });
});
