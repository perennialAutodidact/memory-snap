import PropTypes from 'prop-types';
import { FormStep } from './FormPropTypes';

const Button = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  type: PropTypes.string,
};

const ContextProvider = {
  children: PropTypes.node.isRequired,
  providedState: PropTypes.object,
};

const FormProvider = {
  ...ContextProvider,
};

const GameProvider = {
  ...ContextProvider,
};

const PhotosProvider = {
  ...ContextProvider,
};

const Providers = {
  FormProvider,
  GameProvider,
  PhotosProvider,
};

const AppRoute = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  Element: PropTypes.node.isRequired,
  children: PropTypes.arrayOf(FormStep),
};

// it probably makes more sense for this to be in Proptypes/FormPropTypes.js,
// but it causes a circular dependency because it requires AppRoute and AppRoute
// requires FormStep
const SetupPage = PropTypes.shape({
  route: AppRoute,
}).isRequired;

export { AppRoute, Button, Providers, SetupPage };
