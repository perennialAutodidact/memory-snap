import { useContext } from 'react';
import { FormContext } from '@/contexts/FormContext';

const useFormContext = () => {
  const formContext = useContext(FormContext);

  if (!formContext.formState || !formContext.formDispatch) {
    throw new Error(
      'Component must be rendered as a child of the FormProvider component',
    );
  }

  return formContext;
};

export default useFormContext;
