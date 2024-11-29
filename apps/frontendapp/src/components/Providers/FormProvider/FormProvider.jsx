import React, { useReducer } from "react";
import { FormContext } from "@/contexts/FormContext";
import { baseState } from "@/contexts";
import { formReducer } from "@/contexts/FormContext/reducer";
import proptypes from "@/proptypes";

const FormProvider = ({ children, providedState = null } = {}) => {
  const initialState = providedState || baseState.form;
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

FormProvider.propTypes = proptypes.App.Providers.FormProvider;

export default FormProvider;
