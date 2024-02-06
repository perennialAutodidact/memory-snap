import { setupTests } from 'helpers/tests';
import App from 'App';

describe('App', () => {
  describe('routing', () => {
    it('renders the Setup page at /setup', () => {
      const { screen } = setupTests(App, { route: '/setup' });
      expect(
        screen.getByRole('banner', { name: /game setup/i })
      ).toBeInTheDocument();
    });

    it('renders the Game page at /', () => {
      const { screen } = setupTests(App, { route: '/' });
      expect(screen.getByLabelText('memory snap game')).toBeInTheDocument();
    });
  });

  it('lets me try stuff with how im gonna test this', () => {
    setupTests(App, { route: '/setup' });

    // const justReturnSetup =
  });
});
