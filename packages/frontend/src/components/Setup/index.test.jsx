import { setupTests } from 'helpers/tests';
import Setup from '.';

describe('Setup component', () => {
  it('renders header', () => {
    const { screen } = setupTests(Setup);

    expect(
      screen.getByRole('banner', { name: /game setup/i })
    ).toBeInTheDocument();
  });
});
