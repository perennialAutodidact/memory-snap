import { setupTests } from 'helpers/tests';
import Setup from '.';
import { routes } from 'utils';

describe('Setup component', () => {
  it('renders header', () => {
    const parent = routes[0]
    const { screen } = setupTests(Setup,  { props: { parent } } );

    expect(
      screen.getByRole('banner', { name: /game setup/i })
    ).toBeInTheDocument();
  });
});
