import { setupTests } from 'helpers/tests';
import Layout from '.';

describe('Layout component', () => {
  it('renders <main> tag', () => {
    const { screen } = setupTests(Layout);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
