import { render, renderHook } from '@testing-library/react';
import useGameContext from '.';
import GameProvider from 'components/providers/game';

describe('useGameContext hook', () => {
  let errorObject;
  beforeEach(() => {
    // prevent error from useGameContext from printing in the test console
    errorObject = console.error;
    console.error = jest.fn();
  });

  afterEach(() => {
    console.error = errorObject;
  });

  it('throws an error if not wrapped in the GameProvider component', () => {
    expect(() => renderHook(useGameContext)).toThrow();
  });

  it('renders component wrapped in GameProvider without error', () => {
    expect(() =>
      renderHook(useGameContext, { wrapper: GameProvider })
    ).not.toThrow();
  });
});
