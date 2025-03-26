import PropTypes from 'prop-types';

const FormElement = PropTypes.shape({
  FormElement: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonColorClass: PropTypes.string,
});

const FormStep = {
  name: PropTypes.string,
  path: PropTypes.string,
  index: PropTypes.bool,
  Element: PropTypes.func,
  schema: PropTypes.object,
  elementProps: FormElement,
};

const Header = {
  text: PropTypes.string.isRequired,
};

const ProgressBar = {
  currentStep: PropTypes.number,
  totalSteps: PropTypes.number,
};

const Input = {
  id: PropTypes.string,
  register: PropTypes.func,
  name: PropTypes.string,
  errors: PropTypes.object,
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

const Slider = {
  id: PropTypes.string,
  register: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
};

export { FormElement, FormStep, Header, Input, ProgressBar, Slider };
