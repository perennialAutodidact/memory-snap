import { setupTests } from 'utils';
import ProgressBar from './ProgressBar';

describe('ProgressBar component', () => {
  it('renders progress based on props', () => {
    const props = { currentStep: 1, totalSteps: 3 };
    const { screen } = setupTests(ProgressBar, { props });
    expect(screen.getByRole('progressbar')).toHaveStyle('width: 33%');
  });
});
