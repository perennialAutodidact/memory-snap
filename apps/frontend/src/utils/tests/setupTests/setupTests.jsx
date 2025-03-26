import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { baseState } from '@/contexts';
import ProvidersWrapper from '@/utils/tests/ProvidersWrapper';

/**
 * creates an extended version of React Testing Library's render function
 * @param {React.ReactNode} Component the React component to be used within a test
 * @param { props: React.ComponentProps, state: Partial<TAppState>, route:string } options options for rendering the component
 * @returns an object containing an instance of React Testing Library's screen object
 * and an instance of React Testing Library's userEvent
 */
const setupTests = (
  Component,
  { props, state = baseState, route = '/' } = {},
) => {
  const user = userEvent.setup({
    advanceTimers: vi.advanceTimersByTime.bind(vi),
  });

  render(
    <ProvidersWrapper state={state} route={route}>
      <Component {...props} />
    </ProvidersWrapper>,
  );

  return { screen, user };
};

export { setupTests };
