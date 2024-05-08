import React from 'react';
import Button from 'components/Button';
import { useForm } from 'react-hook-form';
import useFormContext from 'hooks/useFormContext';
import { updateForm } from 'contexts/form/actions';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line
const FormStep = ({ label, btnText, FormElement, btnColor, name }) => {
  const {
    dispatch,
    state: { currentStep },
  } = useFormContext();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // eslint-disable-next-line
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    dispatch(updateForm(data[name]));

    navigate(`/setup/step-${currentStep + 1}`);
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
