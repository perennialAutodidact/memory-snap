// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import 'whatwg-fetch';
import { mswServer } from './__mocks__/api';
import { cleanup } from '@testing-library/react';

beforeAll(() => {
  mswServer.listen({ onUnhandledRequest: 'error' });
});

beforeEach(() => {
  vi.useFakeTimers();

  // prevent the msw server from timing out in Vitest
  // https://github.com/testing-library/user-event/issues/1115#issuecomment-2495876991
  vi.stubGlobal('jest', {
    advanceTimersByTime: vi.advanceTimersByTime.bind(vi),
  });
});

afterEach(() => {
  vi.useRealTimers();
  mswServer.resetHandlers();
  cleanup();
});

afterAll(() => {
  vi.unstubAllGlobals();
  mswServer.close();
});
