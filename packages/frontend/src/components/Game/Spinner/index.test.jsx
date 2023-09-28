import { setupTests } from 'helpers/tests';
import Spinner from '.';

describe('Spinner component', () => {
  it('renders the spinner', () => {
    const {
      screen: { getByRole },
    } = setupTests(Spinner);
    expect(getByRole('status')).toBeInTheDocument();
  });
});
