import { createSetupTestsForRoute } from 'helpers/routeTests';
import App from 'App';

describe('App', () => {
  // describe('routing', () => {
  //   it('renders the Setup page at /setup', () => {
  //     const { screen } = setupTests(App, { route: '/setup' });
  //     expect(
  //       screen.getByRole('banner', { name: /game setup/i })
  //     ).toBeInTheDocument();
  //   });

  //   it('renders the Game page at /', () => {
  //     const { screen } = setupTests(App, { route: '/play' });
  //     expect(screen.getByLabelText('memory snap game')).toBeInTheDocument();
  //   });
  // });

  it('it renders that game component at /play', () => {
    const setupTestsForGameRoute = createSetupTestsForRoute('/play');

    const { screen } = setupTestsForGameRoute(App);

    expect(screen.getByLabelText('memory snap game')).toBeInTheDocument();
  });
});
