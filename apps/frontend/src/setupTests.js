import '@testing-library/jest-dom';
import { mswServer } from '__mocks__/api';


beforeEach(async () => {
  mswServer.listen();
});

afterEach(() => mswServer.resetHandlers());

afterAll(() => {
  mswServer.close();
});
