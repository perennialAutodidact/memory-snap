import { setupTests } from '@/utils';
import Spinner from './Spinner';

describe('Spinner component', () => {
  it('renders the spinner', async () => {
    const {
      screen: { getByRole },
    } = setupTests(Spinner);
    expect(getByRole('status')).toBeInTheDocument();
  });
});
