import { shouldUseTestData } from './shouldUseTestData';
describe('shouldUseTestData()', () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });
  it('returns the value of the VITE_USE_TEST_DATA environment variable as a boolean', () => {
    vi.stubEnv('VITE_USE_TEST_DATA', 'true');
    expect(shouldUseTestData(import.meta.env)).toBe(true);
    vi.stubEnv('VITE_USE_TEST_DATA', 'false');
    expect(shouldUseTestData(import.meta.env)).toBe(false);
  });
});
