import { getRouteByName, routes, ui } from '@/utils';
import SetupForm from './Form';
import { setupTests } from '@/utils';
import { produce } from 'immer';
import { baseState } from '@/contexts';

const {
  pages: {
    setup: { formStep },
  },
} = ui;
const { children: formStepRoutes } = getRouteByName(routes, 'setup');

const getFormStepByPath = (path) =>
  formStepRoutes.find((route) => route.path === path);

describe('SetupForm component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  describe('renders correct component for each form step', () => {
    const defaultState = produce(baseState, (draft) => {
      draft.form.values = {
        player1Name: 'player 1',
        player2Name: 'player 2',
        tileQuantity: 10,
        imageSearchQuery: 'cat',
      };
    });
    it('renders step 1 at /step-1', () => {
      const state = produce(defaultState, (draft) => {
        draft.form.step.current = 1;
      });
      const formStepRoute = getFormStepByPath('/step-1');
      setupTests(SetupForm, { state, route: formStepRoute.path });

      const formElementLabel = formStepRoute.elementProps.label;
      const formElement = formStep.formElement(formElementLabel);

      expect(formElement.get()).toBeInTheDocument();
    });
    it('renders step 2 at /step-2', () => {
      const state = produce(defaultState, (draft) => {
        draft.form.step.current = 2;
      });
      const formStepRoute = getFormStepByPath('/step-2');
      setupTests(SetupForm, { state, route: formStepRoute.path });

      const formElementLabel = formStepRoute.elementProps.label;
      const formElement = formStep.formElement(formElementLabel);

      expect(formElement.get()).toBeInTheDocument();
    });
    it('renders step 3 at /step-3', () => {
      const state = produce(defaultState, (draft) => {
        draft.form.step.current = 3;
      });
      const formStepRoute = getFormStepByPath('/step-3');
      setupTests(SetupForm, { state, route: formStepRoute.path });

      const formElementLabel = formStepRoute.elementProps.label;
      const formElement = formStep.formElement(formElementLabel);

      expect(formElement.get()).toBeInTheDocument();
    });
    it('renders step 4 at /step-4', () => {
      const state = produce(defaultState, (draft) => {
        draft.form.step.current = 4;
      });
      const formStepRoute = getFormStepByPath('/step-4');
      setupTests(SetupForm, { state, route: formStepRoute.path });

      const formElementLabel = formStepRoute.elementProps.label;
      const formElement = formStep.formElement(formElementLabel);

      expect(formElement.get()).toBeInTheDocument();
    });
  });
});
