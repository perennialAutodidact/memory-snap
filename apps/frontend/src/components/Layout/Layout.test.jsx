import { setupTests } from 'utils';
import Layout from './Layout';

describe('Layout component', () => {
  it('renders <main> tag', () => {
    const { screen } = setupTests(Layout);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
