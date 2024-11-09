import { setupTests } from 'utils/tests';
import Spinner from './Spinner';

describe('Spinner component', () => {
  it('renders the spinner', () => {
    const {
      screen: { getByRole },
    } = setupTests(Spinner);
    expect(getByRole('status')).toBeInTheDocument();
  });
});
