import TestComponent from '@/utils/tests/TestComponent';
import { createSetupTestsForRoute } from './createSetupTestsForRoute';
import { ui } from '@/utils/tests';

describe('createSetupTestsForRoute()', () => {
  it('returns a setupTests component for a designated route', async () => {
    const testRoute = '/test-route';
    const setupTestsForTestRoute = createSetupTestsForRoute(testRoute);

    setupTestsForTestRoute(TestComponent);

    const locationDisplay = ui.testComponent.locationDisplay.get();
    expect(locationDisplay.textContent).toBe(testRoute);
  });
});
