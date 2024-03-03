import { FormContext } from 'contexts/form';
import { useContext } from 'react';

const useFormContext = () => {
  const context = useContext(FormContext);

  if (context.state === undefined && context.dispatch === undefined) {
    throw new Error(
      'Component must be rendered as a child of the FormProvider component'
    );
  }

  return context;
};

export default useFormContext;
