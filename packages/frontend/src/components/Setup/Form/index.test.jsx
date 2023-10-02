import { setupTests } from 'helpers/tests';
import SetupForm from '.';

describe('SetupForm component', () => {
  it('renders form header component', () => {
    const {
      screen: { getByTestId },
    } = setupTests(SetupForm);
    expect(getByTestId('setupFormHeader')).toBeInTheDocument();
  });
});
