import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { FormContext } from 'contexts/form';
import { baseState } from 'contexts';
import { formReducer } from 'contexts/form/reducer';

const FormProvider = ({ children, providedState = null } = {}) => {
  const initialState = providedState || baseState.form;
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

FormProvider.propTypes = {
  children: PropTypes.node,
  providedState: PropTypes.object,
};

export default FormProvider;
