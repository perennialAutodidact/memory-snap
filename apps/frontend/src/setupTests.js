// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { mswServer } from '__mocks__/api';

let nativeWindowLocation;
beforeAll(() => {
  nativeWindowLocation = window.location;
  delete window.location;
});

beforeEach(() => {
  mswServer.listen();
});

afterEach(() => mswServer.resetHandlers());

afterAll(() => {
  mswServer.close();
  window.location = nativeWindowLocation;
});
