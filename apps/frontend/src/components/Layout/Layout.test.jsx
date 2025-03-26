import { setupTests } from '@/utils';
import Layout from './Layout';

describe('Layout component', () => {
  it('renders <main> tag', async () => {
    const { screen } = setupTests(Layout);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
