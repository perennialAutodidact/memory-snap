import '@testing-library/jest-dom';
import { mswServer } from '__mocks__/api';

console.log('setupTests loaded')

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
