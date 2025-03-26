import { renderHook } from '@testing-library/react';
import useFormContext from './useFormContext';
import { FormProvider } from '@/components/Providers';

describe('useFormContext hook', () => {
  let consoleError;
  beforeEach(() => {
    // prevent error from useGameContext from printing in the test console
    consoleError = console.error;
    console.error = vi.fn();
  });

  afterEach(() => {
    console.error = consoleError;
  });

  it('throws an error if not wrapped in the FormProvider component', () => {
    expect(() => renderHook(useFormContext)).toThrow();
  });

  it('renders component wrapped in FormProvider without error', () => {
    expect(() =>
      renderHook(useFormContext, { wrapper: FormProvider }),
    ).not.toThrow();
  });
});
