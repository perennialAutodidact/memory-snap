import { setupTests } from 'helpers/tests';
import Header from '.';
import { baseState } from 'contexts';

describe('Setup Form Header component', () => {
  it('renders header text from props', () => {
    const props = { headerText: 'Game setup' };
    const {
      screen: { getByRole },
    } = setupTests(Header, { props });

    expect(
      getByRole('heading', { level: 1, name: props.headerText })
    ).toBeInTheDocument();
  });

  it('renders progress bar', () => {
    const {
      screen: { getByRole },
    } = setupTests(Header);
    expect(getByRole('progressbar')).toBeInTheDocument();
  });

  it('renders current step number and total steps count', () => {
    const {
      screen: { getByText },
    } = setupTests(Header);
    const { currentStep, totalSteps } = baseState.form;

    expect(
      getByText(`Step ${currentStep} of ${totalSteps}`)
    ).toBeInTheDocument();
  });
});
