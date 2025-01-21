export const shouldUseTestData = (env) =>
  /^true$/i.test(env.VITE_USE_TEST_DATA);
