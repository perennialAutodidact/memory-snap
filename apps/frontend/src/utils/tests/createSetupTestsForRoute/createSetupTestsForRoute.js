import { setupTests } from '@/utils/tests';

const createSetupTestsForRoute = (route) => {
  return (component, options = {}) =>
    setupTests(component, { ...options, route });
};

export { createSetupTestsForRoute };
