import { setupTests } from 'helpers/tests';
import { createSetupTestsForRoute } from 'helpers/tests';
import SetupForm from '.';
import { routes } from 'utils';

describe('SetupForm component', () => {
  it('renders form header component', () => {
    const {
      screen: { getByTestId },
    } = setupTests(SetupForm);
    expect(getByTestId('setupFormHeader')).toBeInTheDocument();
  });

  it('it renders the correct form component at /setup/step-1', () => {
    const setupTests = createSetupTestsForRoute('/step-1');

    const parent = routes[0];

    const { screen } = setupTests(SetupForm, { props: { parent } });

    const stepOneComponent = screen.getByText("Enter the first player's name");

    expect(stepOneComponent).toBeInTheDocument();
  });

  it('it renders the correct form component at /setup/step-2', () => {
    const setupTests = createSetupTestsForRoute('/step-2');

    const parent = routes[0];

    const { screen } = setupTests(SetupForm, { props: { parent } });

    const stepTwoComponent = screen.getByText("Enter the second player's name");

    expect(stepTwoComponent).toBeInTheDocument();
  });

  it('it renders the correct form component at /setup/step-3', () => {
    const setupTests = createSetupTestsForRoute('/step-3');

    const parent = routes[0];

    const { screen } = setupTests(SetupForm, { props: { parent } });

    const stepThreeComponent = screen.getByText('How many tiles?');

    expect(stepThreeComponent).toBeInTheDocument();
  });

  it('it renders the correct form component at /setup/step-4', () => {
    const setupTests = createSetupTestsForRoute('/step-4');

    const parent = routes[0];

    const { screen } = setupTests(SetupForm, { props: { parent } });

    const stepFourComponent = screen.getByText(
      'What kind of photos on the tiles?'
    );

    expect(stepFourComponent).toBeInTheDocument();
  });
});
