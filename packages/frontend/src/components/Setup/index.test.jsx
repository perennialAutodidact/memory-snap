import { setupTests } from 'helpers/tests';
import Setup from '.';

describe('Setup component', () => {
  it('renders header', () => {
    const { screen } = setupTests(Setup);

    expect(
      screen.getByRole('heading', { level: 2, name: /game setup/i })
    ).toBeInTheDocument();
  });
});
