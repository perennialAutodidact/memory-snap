import { setupTests } from '@/utils';
import SetupPage from './SetupPage';

describe('SetupPage component', () => {
  it('renders header', () => {
    const { screen } = setupTests(SetupPage);

    expect(
      screen.getByRole('banner', { name: /game setup/i }),
    ).toBeInTheDocument();
  });
});
