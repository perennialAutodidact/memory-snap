import { setupTests } from 'helpers/tests';
import FormStep from '.';
import { routes } from '../../../utils';
import { baseState } from 'contexts';
import { produce } from 'immer';

describe('FormStep component', () => {
  it('renders the correct label and form element at step one', () => {
    const { label, placeholder, buttonText, buttonColorClass, FormElement } =
      routes[0].children[0].elementProps;
    const { name, schema } = routes[0].children[0];

    const props = {
      label,
      placeholder,
      buttonText,
      buttonColorClass,
      name,
      schema,
      FormElement,
    };
    const state = { ...baseState };

    const { screen } = setupTests(FormStep, { props, state });

    const stepOneComponent = screen.getByText("Enter the first player's name");

    expect(stepOneComponent).toBeInTheDocument();

    expect(screen.queryByText("Enter the second player's name")).toBeNull();

    const input = document.querySelector('input[type="name"]');
    expect(input).toBeInTheDocument();
  }),
    it('renders the correct label and form element at step three', () => {
      const { label, placeholder, buttonText, buttonColorClass, FormElement } =
        routes[0].children[2].elementProps;
      const { name, schema } = routes[0].children[2];

      const props = {
        label,
        placeholder,
        buttonText,
        buttonColorClass,
        name,
        schema,
        FormElement,
      };
      const setupState = produce(baseState.form, draft => {
        draft.currentStep = 1;
      });

      const state = { ...baseState, form: setupState };

      const { screen } = setupTests(FormStep, { props, state });

        const stepThreeComponent = screen.getByText(
          "How many tiles?"
        );

        expect(stepThreeComponent).toBeInTheDocument();

      const slider = document.querySelector('input[type="range"]');
      expect(slider).toBeInTheDocument();
    });
});
