import { setupTests } from 'helpers/tests';
import FormStep from '.';
import { routes } from '../../../utils';
import { getFormStepPropsFromRouteChild } from 'helpers/getFormStepPropsFromRouteChild';

describe('FormStep component', () => {
  it('renders the correct label text at step one', () => {
    const setupStepChild1 = routes[0].children[0];

    const props = getFormStepPropsFromRouteChild(setupStepChild1);
    const { screen } = setupTests(FormStep, { props });

    const form = screen.getByTestId('form-step')

    expect(form).toHaveTextContent("Enter the first player's name");
  }),

  it('renders the correct label text at step two', () => {
    const setupStepChild2 = routes[0].children[1];

    const props = getFormStepPropsFromRouteChild(setupStepChild2);
    const { screen } = setupTests(FormStep, { props });

    const form = screen.getByTestId('form-step')

    expect(form).toHaveTextContent("Enter the second player's name");
  }),

  it('renders the correct label text at step three', () => {
    const setupStepChild3 = routes[0].children[2];

    const props = getFormStepPropsFromRouteChild(setupStepChild3);
    const { screen } = setupTests(FormStep, { props });

    const form = screen.getByTestId('form-step')

    expect(form).toHaveTextContent("How many tiles?");
  }),

  it('renders the correct label text at step four', () => {
    const setupStepChild4 = routes[0].children[3];

    const props = getFormStepPropsFromRouteChild(setupStepChild4);
    const { screen } = setupTests(FormStep, { props });

    const form = screen.getByTestId('form-step')

    expect(form).toHaveTextContent("What kind of photos on the tiles?");
  })
});
