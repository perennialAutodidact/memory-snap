import { setupTests } from '@/utils';
import Header from './FormHeader';
import { baseState } from '@/contexts';

describe('Setup Form Header component', () => {
  const defaultProps = { text: 'Game setup' };
  it('renders header text from props', async () => {
    const props = { ...defaultProps };
    const {
      screen: { getByRole },
    } = setupTests(Header, { props });

    expect(
      getByRole('heading', { level: 1, name: props.text }),
    ).toBeInTheDocument();
  });

  it('renders progress bar', async () => {
    const props = { ...defaultProps };
    const {
      screen: { getByRole },
    } = setupTests(Header, { props });
    expect(getByRole('progressbar')).toBeInTheDocument();
  });

  it('renders current step number and total steps count', async () => {
    const props = { ...defaultProps };
    const {
      screen: { getByText },
    } = setupTests(Header, { props });
    const { step } = baseState.form;

    expect(
      getByText(`Step ${step.current} of ${step.total}`),
    ).toBeInTheDocument();
  });
});
