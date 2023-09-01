import { setupTests } from 'helpers/tests';
import SetupForm from '.';

describe('SetupForm component', () => {
  it('renders form progress bar', () => {
    const { screen } = setupTests(SetupForm);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
