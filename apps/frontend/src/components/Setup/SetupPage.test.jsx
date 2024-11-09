import { setupTests } from 'utils/tests';
import SetupPage from './SetupPage';
import { routes } from 'utils';

describe('SetupPage component', () => {
  it('renders header', () => {
    const { screen } = setupTests(SetupPage, { props: { route: routes[0] } });

    expect(
      screen.getByRole('banner', { name: /game setup/i })
    ).toBeInTheDocument();
  });
});
