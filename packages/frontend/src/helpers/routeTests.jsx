import { setupTests } from 'helpers/tests';

const createSetupTestsForRoute = (route) => {
  return (component, options) => setupTests(component, { ...options, route });
};

export { createSetupTestsForRoute };
