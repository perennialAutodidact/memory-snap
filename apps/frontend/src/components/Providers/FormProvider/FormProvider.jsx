import React, { useReducer } from 'react';
import { FormContext } from '@/contexts/FormContext/FormContext';
import { baseState } from '@/contexts';
import proptypes from '@/proptypes';

const FormProvider = ({ children, providedState = null } = {}) => {
  const initialState = providedState || baseState.form;
  const [formState, formDispatch] = useReducer(
    FormContext.reducer,
    initialState,
  );

  return (
    <FormContext.Provider
      value={{ formState, formDispatch, formActions: FormContext.formActions }}
    >
      {children}
    </FormContext.Provider>
  );
};

FormProvider.propTypes = proptypes.App.Providers.FormProvider;

export default FormProvider;
