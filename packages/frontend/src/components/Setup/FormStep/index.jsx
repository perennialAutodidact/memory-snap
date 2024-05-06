import React from 'react';
import Button from 'components/Button';
import { useForm } from 'react-hook-form';
import useFormContext from 'hooks/useFormContext';
import { enterP1Name } from 'contexts/form/actions';

// eslint-disable-next-line
const FormStep = ({ label, btnText, FormElement, btnColor, name }) => {
  const { dispatch, currentStep } = useFormContext();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    dispatch(enterP1Name(data[name]));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>{label}</h3>
      <FormElement register={register} name={name} ref={null} />,
      <Button type="submit" text={btnText} color={btnColor} />
    </form>
  );
};

export default FormStep;
