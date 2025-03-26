import { isDevEnv } from './isDevEnv';
describe('isDevEnv()', () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });
  it('returns the value of the VITE_USE_TEST_DATA environment variable as a boolean', () => {
    vi.stubEnv('VITE_USE_TEST_DATA', 'true');
    expect(isDevEnv(import.meta.env)).toBe(true);
    vi.stubEnv('VITE_USE_TEST_DATA', 'false');
    expect(isDevEnv(import.meta.env)).toBe(false);
  });
});
